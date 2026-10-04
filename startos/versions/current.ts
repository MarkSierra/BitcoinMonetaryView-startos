import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.0:4',
  releaseNotes: {
    en_US: 'Overview shows the whole-chain estimate only, with the exact figure so far (no more switching). History marks unscanned months and has a custom range card with shortcuts. Find any block by height or hash and analyse unscanned blocks on demand. Corrected the storage note.',
    de_DE: 'Die Übersicht zeigt nur noch die Schätzung für die ganze Chain, mit dem bisher exakten Wert (kein Hin- und Herspringen mehr). Der Verlauf markiert noch nicht gescannte Monate und hat eine Karte für eigene Zeiträume mit Schnellauswahl. Jeden Block per Höhe oder Hash finden und ungescannte Blöcke sofort analysieren. Hinweis zur Speicherersparnis korrigiert.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
