import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.8:0',
  releaseNotes: {
    en_US: `Updated Monetary View to 0.3.8.

- New: works with Bitcoin Roots as well as Bitcoin Core and Knots
- Fix: the latest-block cards no longer cut off the spam and block size
- Internal: the dashboard's database connections are pooled and closed cleanly

[Full release notes](https://github.com/MarkSierra/BitcoinMonetaryView/releases/tag/v0.3.8)`,
    de_DE: `Monetary View auf 0.3.8 aktualisiert.

- Neu: funktioniert mit Bitcoin Roots ebenso wie mit Bitcoin Core und Knots
- Behoben: die Karten der neuesten Blöcke schneiden Spam und Blockgröße nicht mehr ab
- Intern: die Datenbankverbindungen des Dashboards werden gebündelt und sauber geschlossen

[Vollständige Versionshinweise](https://github.com/MarkSierra/BitcoinMonetaryView/releases/tag/v0.3.8)`,
    es_ES: `Monetary View actualizado a 0.3.8.

- Nuevo: funciona con Bitcoin Roots además de Bitcoin Core y Knots
- Corrección: las tarjetas de los últimos bloques ya no cortan el spam ni el tamaño del bloque
- Interno: las conexiones a la base de datos del panel se reutilizan y se cierran correctamente

[Notas completas de la versión](https://github.com/MarkSierra/BitcoinMonetaryView/releases/tag/v0.3.8)`,
    fr_FR: `Monetary View mis à jour en 0.3.8.

- Nouveau : fonctionne avec Bitcoin Roots comme avec Bitcoin Core et Knots
- Correction : les cartes des derniers blocs ne coupent plus le spam ni la taille du bloc
- Interne : les connexions à la base de données du tableau de bord sont mutualisées et fermées proprement

[Notes de version complètes](https://github.com/MarkSierra/BitcoinMonetaryView/releases/tag/v0.3.8)`,
    pl_PL: `Zaktualizowano Monetary View do 0.3.8.

- Nowość: działa z Bitcoin Roots, tak jak z Bitcoin Core i Knots
- Poprawka: karty najnowszych bloków nie obcinają już spamu ani rozmiaru bloku
- Wewnętrzne: połączenia dashboardu z bazą danych są współdzielone i poprawnie zamykane

[Pełne informacje o wydaniu](https://github.com/MarkSierra/BitcoinMonetaryView/releases/tag/v0.3.8)`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
