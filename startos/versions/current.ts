import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.7:1',
  releaseNotes: {
    en_US:
      'Monetary View 0.3.7: a realistic remaining-time estimate from the start of the full scan, progress shown as % of data (in the Scan Progress check too), clearer latest-block cards, a status bar that fits every language and phone screens, and the technical settings list folded away. The figures are unchanged. The web interface now requires a password: run Set Web Password to get one.',
    de_DE:
      'Monetary View 0.3.7: eine realistische Restzeit ab Beginn des vollständigen Scans, Fortschritt als % der Daten (auch in der Prüfung Scan-Fortschritt), klarere Karten der neuesten Blöcke, eine Statusleiste, die in jede Sprache und auf jedes Handy passt, und eine eingeklappte technische Einstellungsliste. Die Zahlen bleiben gleich. Die Weboberfläche verlangt jetzt ein Passwort: Führe Web-Passwort festlegen aus, um eines zu erhalten.',
    es_ES:
      'Monetary View 0.3.7: un tiempo restante realista desde el inicio del escaneo completo, progreso como % de los datos (también en la comprobación Progreso del escaneo), tarjetas de los últimos bloques más claras, una barra de estado que cabe en todos los idiomas y en el móvil, y la lista técnica de ajustes plegada. Las cifras no cambian. La interfaz web ahora requiere contraseña: ejecuta Establecer contraseña web para obtener una.',
    fr_FR:
      'Monetary View 0.3.7 : un temps restant réaliste dès le début de l’analyse complète, la progression en % des données (aussi dans la vérification Progression de l’analyse), des cartes des derniers blocs plus claires, une barre d’état qui tient dans toutes les langues et sur mobile, et la liste technique des réglages repliée. Les chiffres ne changent pas. L’interface web exige désormais un mot de passe : lancez Définir le mot de passe web pour en obtenir un.',
    pl_PL:
      'Monetary View 0.3.7: realistyczny pozostały czas od początku pełnego skanowania, postęp jako % danych (także w kontroli Postęp skanowania), czytelniejsze karty najnowszych bloków, pasek stanu mieszczący się w każdym języku i na telefonie oraz zwinięta techniczna lista ustawień. Liczby się nie zmieniają. Interfejs webowy wymaga teraz hasła: uruchom Ustaw hasło do interfejsu, aby je otrzymać.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
