import { T } from '@start9labs/start-sdk'
import { settingsJson } from './fileModels/settings.json'
import { i18n } from './i18n'
import { sdk } from './sdk'
import {
  bitcoindRpcAddress,
  btcMountpoint,
  cookiePath,
  dataDir,
  uiPort,
} from './utils'

/** Reads /api/status inside the container and prints phase + progress as JSON. */
const STATUS_SCRIPT = [
  'import json, urllib.request',
  `r = urllib.request.urlopen("http://127.0.0.1:${uiPort}/api/status", timeout=5)`,
  'd = json.load(r)',
  'print(json.dumps({"phase": d.get("phase"), "label": d.get("phase_label"),',
  '                  "progress": d.get("progress"), "detail": d.get("detail")}))',
].join('\n')

export const main = sdk.setupMain(async ({ effects }) => {
  console.info(i18n('Starting BitcoinMonetaryView'))

  // Seed defaults on first start; restarts are not needed on change — the app watches the file.
  await settingsJson.merge(effects, {})

  // Null while bitcoind publishes no RPC binding; .const() restarts main when it appears.
  const rpc = await bitcoindRpcAddress(effects)
  if (!rpc) {
    return sdk.Daemons.of(effects).addHealthCheck('bitcoind-rpc', {
      ready: {
        display: i18n('Bitcoin connection'),
        gracePeriod: 0,
        trigger: sdk.trigger.cooldownTrigger(60_000),
        fn: async () => ({
          result: 'loading',
          message: i18n('Waiting for Bitcoin to publish its RPC interface'),
        }),
      },
      requires: [],
    })
  }

  const sub = sdk.SubContainer.of(
    effects,
    { imageId: 'bitcoinmonetaryview' },
    sdk.Mounts.of()
      .mountVolume({
        volumeId: 'main',
        subpath: null,
        mountpoint: dataDir,
        readonly: false,
      })
      // Read-only directory mount: bitcoind replaces .cookie on every restart, and the app
      // re-reads it on HTTP 401. Nothing else in this volume is ever opened.
      .mountDependency<T.SDKManifest>({
        dependencyId: 'bitcoind',
        volumeId: 'main',
        subpath: null,
        mountpoint: btcMountpoint,
        readonly: true,
      }),
    'bitcoinmonetaryview',
  )

  return sdk.Daemons.of(effects)
    .addDaemon('primary', {
      subcontainer: sub,
      exec: {
        command: [
          'python3',
          '-m',
          'bitcoinmonetaryview',
          '--data-dir',
          dataDir,
        ],
        // root inside the isolated subcontainer, like the official Mempool and Electrs
        // packages: bitcoind's RPC cookie is readable by root only. The app still opens
        // nothing in bitcoind's volume but the cookie, and that mount is read-only.
        user: 'root',
        env: {
          PYTHONPATH: '/app',
          PYTHONUNBUFFERED: '1',
          // Pinned by the platform (environment beats settings.json in the app):
          BMV_MANAGED_BY: 'startos',
          BMV_BIND: '0.0.0.0',
          BMV_PORT: String(uiPort),
          BMV_RPC_URL: `http://${rpc.address}`,
          BMV_RPC_COOKIE_FILE: cookiePath,
          BMV_USE_REST: rpc.rest ? 'true' : 'false',
        },
      },
      ready: {
        display: i18n('Web Interface'),
        fn: () =>
          sdk.healthCheck.checkPortListening(effects, uiPort, {
            successMessage: i18n('The web interface is ready'),
            errorMessage: i18n('The web interface is not ready'),
          }),
      },
      requires: [],
    })
    .addHealthCheck('scan-progress', {
      ready: {
        display: i18n('Scan Progress'),
        // The status call is cheap, but there is no need to ask often.
        trigger: sdk.trigger.cooldownTrigger(30_000),
        fn: async () => {
          const res = await sub.exec(['python3', '-c', STATUS_SCRIPT])
          if (res.exitCode !== 0) {
            return { result: 'loading', message: i18n('Starting up') }
          }
          let st: {
            phase?: string
            label?: string
            progress?: number
            detail?: string
          }
          try {
            st = JSON.parse(String(res.stdout))
          } catch {
            return { result: 'loading', message: i18n('Starting up') }
          }
          const label = st.label ?? st.phase ?? ''
          if (st.phase === 'live') {
            return {
              result: 'success',
              message: i18n('Up to date — following new blocks'),
            }
          }
          if (st.phase === 'error') {
            return { result: 'failure', message: st.detail ?? label }
          }
          const pct =
            typeof st.progress === 'number'
              ? ` ${st.progress.toFixed(1)} %`
              : ''
          return { result: 'loading', message: `${label}${pct}` }
        },
      },
      requires: ['primary'],
    })
})
