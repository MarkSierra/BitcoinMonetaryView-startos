import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.5:0',
  releaseNotes: {
    en_US:
      'Monetary View 0.3.5: the service now runs on Python 3.15 (previously 3.12). Before the switch every test passed on Python 3.15 and inside the new image. No change to the app or its figures.',
    de_DE:
      'Monetary View 0.3.5: Der Dienst läuft jetzt mit Python 3.15 (bisher 3.12). Vor der Umstellung liefen alle Tests mit Python 3.15 und im neuen Image erfolgreich. Keine Änderung an der App oder ihren Zahlen.',
    es_ES:
      'Monetary View 0.3.5: el servicio funciona ahora con Python 3.15 (antes 3.12). Antes del cambio, todas las pruebas se superaron con Python 3.15 y dentro de la nueva imagen. Sin cambios en la app ni en sus cifras.',
    fr_FR:
      'Monetary View 0.3.5 : le service fonctionne désormais avec Python 3.15 (auparavant 3.12). Avant le changement, tous les tests ont réussi avec Python 3.15 et dans la nouvelle image. Aucun changement dans l’application ni dans ses chiffres.',
    pl_PL:
      'Monetary View 0.3.5: usługa działa teraz na Pythonie 3.15 (wcześniej 3.12). Przed zmianą wszystkie testy przeszły na Pythonie 3.15 i w nowym obrazie. Bez zmian w aplikacji i jej liczbach.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
