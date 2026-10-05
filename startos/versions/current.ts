import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.2.0:0',
  releaseNotes: {
    en_US: 'Monetary View 0.2.0: whole-chain spam estimate within minutes, block search by height or hash with on-demand analysis, statistics for any period, unscanned history clearly marked, latest blocks kept current during the scan, and a quieter dashboard.',
    de_DE: 'Monetary View 0.2.0: Spam-Schätzung für die ganze Chain innerhalb weniger Minuten, Blocksuche per Höhe oder Hash mit Sofortanalyse, Statistiken für beliebige Zeiträume, klar markierte noch nicht gescannte Historie, aktuelle neueste Blöcke während des Scans und ein ruhigeres Dashboard.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
