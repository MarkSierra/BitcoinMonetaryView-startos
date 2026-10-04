import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.0:3',
  releaseNotes: {
    en_US: 'Whole-chain spam estimate within minutes of the first start (sample pass), refined to exact figures as the full scan proceeds. Quieter dashboard: no more continuous redraws or reload-like refreshes.',
    de_DE: 'Spam-Schätzung für die ganze Chain schon wenige Minuten nach dem ersten Start (Stichprobe), die mit dem vollständigen Scan zu exakten Werten wird. Ruhigeres Dashboard: kein ständiges Neuzeichnen und kein scheinbares Neuladen mehr.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
