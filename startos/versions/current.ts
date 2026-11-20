import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.14:2',
  releaseNotes: {
    en_US:
      'While waiting for you to update Bitcoin, Monetary View writes that to its logs once instead of repeating it every minute.',
    de_DE:
      'Während Monetary View darauf wartet, dass du Bitcoin aktualisierst, vermerkt es das einmal in seinen Protokollen, statt es jede Minute zu wiederholen.',
    es_ES:
      'Mientras espera a que actualices Bitcoin, Monetary View lo indica una sola vez en sus registros en lugar de repetirlo cada minuto.',
    fr_FR:
      "En attendant que vous mettiez Bitcoin à jour, Monetary View l'indique une seule fois dans ses journaux au lieu de le répéter chaque minute.",
    pl_PL:
      'Czekając na aktualizację Bitcoina, Monetary View zapisuje to w logach raz, zamiast powtarzać co minutę.',
  },
  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
