import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.6:0',
  releaseNotes: {
    en_US:
      'Monetary View 0.3.6: the app now uses one name, Monetary View, everywhere you see it (dashboard, actions, messages, logs). BitcoinMonetaryView remains only the name of its GitHub repository. Requires StartOS 0.4.1 or newer. No change to the figures.',
    de_DE:
      'Monetary View 0.3.6: Die App heißt jetzt überall, wo du sie siehst, einheitlich Monetary View (Dashboard, Aktionen, Meldungen, Logs). BitcoinMonetaryView ist nur noch der Name ihres GitHub-Repositorys. Benötigt StartOS 0.4.1 oder neuer. Keine Änderung an den Zahlen.',
    es_ES:
      'Monetary View 0.3.6: la app usa ahora un solo nombre, Monetary View, en todos los lugares donde la ves (panel, acciones, mensajes, registros). BitcoinMonetaryView queda solo como nombre de su repositorio de GitHub. Requiere StartOS 0.4.1 o posterior. Sin cambios en las cifras.',
    fr_FR:
      'Monetary View 0.3.6 : l’application porte désormais un seul nom, Monetary View, partout où vous la voyez (tableau de bord, actions, messages, journaux). BitcoinMonetaryView reste seulement le nom de son dépôt GitHub. Nécessite StartOS 0.4.1 ou plus récent. Aucun changement dans les chiffres.',
    pl_PL:
      'Monetary View 0.3.6: aplikacja ma teraz jedną nazwę, Monetary View, wszędzie tam, gdzie ją widzisz (panel, akcje, komunikaty, logi). BitcoinMonetaryView pozostaje tylko nazwą jej repozytorium na GitHubie. Wymaga StartOS 0.4.1 lub nowszego. Bez zmian w liczbach.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
