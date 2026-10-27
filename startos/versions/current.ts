import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.2.5:0',
  releaseNotes: {
    en_US:
      'Monetary View 0.2.5: the dashboard is now also available in German; it follows your browser language, and the EN/DE button in the header switches it. Fixed: connections to your node now close properly when the scanner restarts. The package files are now signed (build provenance), and the base image is pinned.',
    de_DE:
      'Monetary View 0.2.5: Das Dashboard gibt es jetzt auch auf Deutsch; es folgt der Sprache deines Browsers, und die Schaltfläche EN/DE oben rechts wechselt sie. Behoben: Verbindungen zu deinem Node werden jetzt sauber geschlossen, wenn der Scanner neu startet. Die Paketdateien sind jetzt signiert (Build-Provenance), und das Basis-Image ist fest gepinnt.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
