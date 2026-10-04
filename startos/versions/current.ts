import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.0:5',
  releaseNotes: {
    en_US: 'Latest blocks and totals stay current during the history scan. All notes use one consistent style. Includes everything from 0.1.0:4 (estimate-only overview, block search, custom ranges).',
    de_DE: 'Neueste Blöcke und Summen bleiben auch während des Verlaufs-Scans aktuell. Alle Hinweise im einheitlichen Stil. Enthält alles aus 0.1.0:4 (Übersicht nur mit Schätzung, Blocksuche, eigene Zeiträume).',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
