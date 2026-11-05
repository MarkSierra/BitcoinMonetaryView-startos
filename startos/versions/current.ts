import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.7:0',
  releaseNotes: {
    en_US:
      'Monetary View 0.3.7: realistic remaining time at the start of the full scan (it showed hundreds of days), progress shown as % of data, clearer latest-block cards (0.3 % instead of 0 %, spam vs. block size), a status bar that fits in every language and on phones, the Scan Progress check now says % of data too, and the technical settings list is folded away. No change to the figures.',
    de_DE:
      'Monetary View 0.3.7: realistische Restzeit zu Beginn des vollständigen Scans (sie zeigte Hunderte Tage), Fortschritt als % der Daten, klarere Karten der neuesten Blöcke (0,3 % statt 0 %, Spam vs. Blockgröße), eine Statusleiste, die in jeder Sprache und auf dem Handy passt, die Prüfung Scan-Fortschritt zeigt jetzt ebenfalls % der Daten, und die technische Einstellungsliste ist eingeklappt. Keine Änderung an den Zahlen.',
    es_ES:
      'Monetary View 0.3.7: tiempo restante realista al inicio del escaneo completo (mostraba cientos de días), progreso como % de los datos, tarjetas de los últimos bloques más claras (0,3 % en lugar de 0 %, spam frente a tamaño del bloque), una barra de estado que cabe en todos los idiomas y en el móvil, la comprobación Progreso del escaneo ahora también indica % de los datos, y la lista técnica de ajustes aparece plegada. Sin cambios en las cifras.',
    fr_FR:
      'Monetary View 0.3.7 : temps restant réaliste au début de l’analyse complète (il affichait des centaines de jours), progression en % des données, cartes des derniers blocs plus claires (0,3 % au lieu de 0 %, spam par rapport à la taille du bloc), une barre d’état qui tient dans toutes les langues et sur mobile, la vérification Progression de l’analyse indique désormais aussi le % des données, et la liste technique des réglages est repliée. Aucun changement dans les chiffres.',
    pl_PL:
      'Monetary View 0.3.7: realistyczny pozostały czas na początku pełnego skanowania (pokazywał setki dni), postęp jako % danych, czytelniejsze karty najnowszych bloków (0,3 % zamiast 0 %, spam a rozmiar bloku), pasek stanu, który mieści się w każdym języku i na telefonie, kontrola Postęp skanowania także pokazuje teraz % danych, a techniczna lista ustawień jest zwinięta. Bez zmian w liczbach.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
