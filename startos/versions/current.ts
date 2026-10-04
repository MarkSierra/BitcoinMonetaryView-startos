import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.0:0',
  releaseNotes: {
    en_US: 'First StartOS package of BitcoinMonetaryView 0.1.0.',
    de_DE: 'Erstes StartOS-Paket von BitcoinMonetaryView 0.1.0.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
