import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.2.4:0',
  releaseNotes: {
    en_US:
      'Monetary View 0.2.4: when the spent-output filter has to be rebuilt (first start after an update, after a crash), this now takes about half as long. The scan also checks spends a little faster. On phones the Connection page no longer scrolls sideways. The first start after this update rebuilds the filter once.',
    de_DE:
      'Monetary View 0.2.4: Wenn der Filter für ausgegebene Outputs neu aufgebaut werden muss (erster Start nach einem Update, nach einem Absturz), dauert das jetzt nur noch etwa halb so lange. Der Scan prüft Ausgaben außerdem etwas schneller. Auf Smartphones lässt sich die Seite „Connection“ nicht mehr seitlich verschieben. Der erste Start nach diesem Update baut den Filter einmal neu auf.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
