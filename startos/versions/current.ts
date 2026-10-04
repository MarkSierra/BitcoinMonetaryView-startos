import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.0:1',
  releaseNotes: {
    en_US: 'No false plain-HTTP warning for the internal connection to Bitcoin.',
    de_DE: 'Keine falsche Klartext-HTTP-Warnung mehr für die interne Verbindung zu Bitcoin.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
