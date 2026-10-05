import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.2.2:0',
  releaseNotes: {
    en_US: 'Monetary View 0.2.2: no changes for StartOS. This release adds support for Umbrel; the version number is kept the same on all platforms.',
    de_DE: 'Monetary View 0.2.2: keine Änderungen für StartOS. Diese Version bringt Unterstützung für Umbrel; die Versionsnummer ist auf allen Plattformen gleich.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
