import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.2.3:0',
  releaseNotes: {
    en_US:
      'Monetary View 0.2.3: much faster restarts. The spent-output filter is now saved when the service stops and loaded back in seconds, instead of being rebuilt for several minutes. The first start after this update still rebuilds it once. Also rebuilt with the latest Python and Debian security updates.',
    de_DE:
      'Monetary View 0.2.3: viel schnellere Neustarts. Der Filter für ausgegebene Outputs wird jetzt beim Stoppen des Dienstes gespeichert und in Sekunden wieder geladen, statt mehrere Minuten lang neu aufgebaut zu werden. Der erste Start nach diesem Update baut ihn noch einmal neu auf. Außerdem mit den neuesten Python- und Debian-Sicherheitsupdates neu gebaut.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
