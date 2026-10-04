import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.0:2',
  releaseNotes: {
    en_US: 'Dashboard no longer keeps the browser busy (no more laptop fan spin-up). No false plain-HTTP warning for the internal connection to Bitcoin.',
    de_DE: 'Das Dashboard belastet den Browser nicht mehr dauerhaft (kein hochdrehender Laptop-Lüfter mehr). Keine falsche Klartext-HTTP-Warnung mehr für die interne Verbindung zu Bitcoin.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
