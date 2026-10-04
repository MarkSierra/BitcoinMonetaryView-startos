import { T } from '@start9labs/start-sdk'
import { sdk } from './sdk'

/** Port the BitcoinMonetaryView web interface listens on inside the container. */
export const uiPort = 8338
/** Host id of the Web UI binding (see interfaces.ts). */
export const mainHostId = 'main'

/** Where the app keeps its own data (settings.json, per-network databases). */
export const dataDir = '/data'
/** bitcoind's main volume, mounted read-only — only the RPC cookie is read from it. */
export const btcMountpoint = '/mnt/bitcoind'
export const cookiePath = `${btcMountpoint}/.cookie`

/** Per-network result databases; rebuildable, so excluded from backups and removed by Rescan. */
export const networkDirs = [
  'mainnet',
  'testnet3',
  'testnet4',
  'signet',
  'regtest',
]

// bitcoind (Bitcoin Core / Knots package, id 'bitcoind') host ids and ports, as published by
// bitcoin-core-startos (startos/utils.ts). Literals so this package does not depend on it at
// the npm level.
/** bitcoind's own RPC + REST listener on the LXC bridge. */
const rpcLocalHostId = 'rpc-local'
const rpcPortLocal = 58332
/** JSON-RPC proxy (no REST) — used when the node publishes no rpc-local binding. */
const rpcHostId = 'rpc'
const rpcPort = 8332

/**
 * The bitcoind RPC address (`<ip>:<port>`) over the LXC bridge: bitcoind's own listener
 * (RPC and REST — faster binary block downloads) when available, otherwise the RPC proxy.
 * `null` while bitcoind publishes neither; `.const()` restarts main when that changes.
 */
export async function bitcoindRpcAddress(effects: T.Effects) {
  const direct = await sdk.host
    .getBridgeAddress(effects, {
      packageId: 'bitcoind',
      hostId: rpcLocalHostId,
      internalPort: rpcPortLocal,
    })
    .const()
  if (direct) return { address: direct, rest: true }
  const proxy = await sdk.host
    .getBridgeAddress(effects, {
      packageId: 'bitcoind',
      hostId: rpcHostId,
      internalPort: rpcPort,
      ssl: false,
    })
    .const()
  return proxy ? { address: proxy, rest: false } : null
}
