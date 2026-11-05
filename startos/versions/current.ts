import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.5:0',
  releaseNotes: {
    en_US:
      'Monetary View 0.3.5 requires StartOS 0.4.1 or newer. It runs on Python 3.15 (previously 3.12) and is built with the current StartOS SDK, which also keeps the health checks from using more memory over time. Bitcoin Knots is now listed explicitly as a supported node. No change to the dashboard or its figures.',
    de_DE:
      'Monetary View 0.3.5 benötigt StartOS 0.4.1 oder neuer. Es läuft mit Python 3.15 (bisher 3.12) und ist mit dem aktuellen StartOS-SDK gebaut, das außerdem verhindert, dass die Statusprüfungen mit der Zeit mehr Speicher belegen. Bitcoin Knots ist jetzt ausdrücklich als unterstützter Node eingetragen. Keine Änderung am Dashboard oder an seinen Zahlen.',
    es_ES:
      'Monetary View 0.3.5 requiere StartOS 0.4.1 o posterior. Funciona con Python 3.15 (antes 3.12) y está construido con el SDK actual de StartOS, que además evita que las comprobaciones de estado usen cada vez más memoria. Bitcoin Knots figura ahora explícitamente como nodo compatible. Sin cambios en el panel ni en sus cifras.',
    fr_FR:
      'Monetary View 0.3.5 nécessite StartOS 0.4.1 ou plus récent. Il fonctionne avec Python 3.15 (auparavant 3.12) et est construit avec le SDK StartOS actuel, qui empêche aussi les vérifications d’état d’utiliser de plus en plus de mémoire. Bitcoin Knots figure désormais explicitement parmi les nœuds pris en charge. Aucun changement dans le tableau de bord ni dans ses chiffres.',
    pl_PL:
      'Monetary View 0.3.5 wymaga StartOS 0.4.1 lub nowszego. Działa na Pythonie 3.15 (wcześniej 3.12) i jest zbudowany z aktualnym SDK StartOS, które dodatkowo zapobiega stopniowemu wzrostowi zużycia pamięci przez kontrole stanu. Bitcoin Knots jest teraz wprost wymieniony jako obsługiwany węzeł. Bez zmian w panelu i jego liczbach.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
