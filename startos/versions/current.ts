import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.2.1:0',
  releaseNotes: {
    en_US: 'Monetary View 0.2.1: bug fixes. Pruned nodes no longer get stuck in the sample pass; new blocks are downloaded once after the full scan; no false chain-reorganisation warnings; blocks mined while the app was off are all picked up; custom ranges show the correct scanned share and refresh their shortcuts; faster block search by hash.',
    de_DE: 'Monetary View 0.2.1: Fehlerbehebungen. Pruned Nodes bleiben nicht mehr im Stichproben-Durchlauf hängen; neue Blöcke werden nach dem vollständigen Scan nur einmal geladen; keine falschen Reorg-Warnungen; alle Blöcke, die gefunden wurden, während die App aus war, werden erfasst; eigene Zeiträume zeigen den richtigen gescannten Anteil und aktualisieren ihre Kurzwahlen; schnellere Blocksuche per Hash.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
