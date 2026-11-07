import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.10:0',
  releaseNotes: {
    en_US: `Updated Monetary View to 0.3.10.

- Fix: the latest-block cards no longer cut off the spam and block size
- Fix: Trends and records always shows its four tiles; one that is not ready yet says when it will be
- Internal: the dashboard's database connections are pooled and closed cleanly

[Full release notes](https://github.com/MarkSierra/BitcoinMonetaryView/releases/tag/v0.3.10)`,
    de_DE: `Monetary View auf 0.3.10 aktualisiert.

- Behoben: die Karten der neuesten Blöcke schneiden Spam und Blockgröße nicht mehr ab
- Behoben: Trends und Rekorde zeigt immer seine vier Kacheln; eine noch nicht fertige sagt, wann sie es sein wird
- Intern: die Datenbankverbindungen des Dashboards werden gebündelt und sauber geschlossen

[Vollständige Versionshinweise](https://github.com/MarkSierra/BitcoinMonetaryView/releases/tag/v0.3.10)`,
    es_ES: `Monetary View actualizado a 0.3.10.

- Corrección: las tarjetas de los últimos bloques ya no cortan el spam ni el tamaño del bloque
- Corrección: Tendencias y récords muestra siempre sus cuatro casillas; una que aún no está lista indica cuándo lo estará
- Interno: las conexiones a la base de datos del panel se reutilizan y se cierran correctamente

[Notas completas de la versión](https://github.com/MarkSierra/BitcoinMonetaryView/releases/tag/v0.3.10)`,
    fr_FR: `Monetary View mis à jour en 0.3.10.

- Correction : les cartes des derniers blocs ne coupent plus le spam ni la taille du bloc
- Correction : Tendances et records affiche toujours ses quatre tuiles ; une tuile pas encore prête indique quand elle le sera
- Interne : les connexions à la base de données du tableau de bord sont mutualisées et fermées proprement

[Notes de version complètes](https://github.com/MarkSierra/BitcoinMonetaryView/releases/tag/v0.3.10)`,
    pl_PL: `Zaktualizowano Monetary View do 0.3.10.

- Poprawka: karty najnowszych bloków nie obcinają już spamu ani rozmiaru bloku
- Poprawka: Trendy i rekordy zawsze pokazują cztery kafelki; kafelek, który nie jest jeszcze gotowy, informuje, kiedy będzie
- Wewnętrzne: połączenia dashboardu z bazą danych są współdzielone i poprawnie zamykane

[Pełne informacje o wydaniu](https://github.com/MarkSierra/BitcoinMonetaryView/releases/tag/v0.3.10)`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
