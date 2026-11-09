import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.11:0',
  releaseNotes: {
    en_US: `Updated Monetary View to 0.3.11.

- Gentler on the disk: during the history scan the database is flushed to disk about 16 times less often
- Internal: the app itself creates its scan databases without copy-on-write on btrfs, as the package has arranged since 0.3.10:1

[Full release notes](https://github.com/MarkSierra/BitcoinMonetaryView/releases/tag/v0.3.11)`,
    de_DE: `Monetary View auf 0.3.11 aktualisiert.

- Schonender für die Festplatte: während des Verlaufsscans wird die Datenbank etwa 16-mal seltener auf die Festplatte geschrieben
- Intern: die App legt ihre Scan-Datenbanken auf btrfs selbst ohne Copy-on-Write an, wie es das Paket seit 0.3.10:1 einrichtet

[Vollständige Versionshinweise](https://github.com/MarkSierra/BitcoinMonetaryView/releases/tag/v0.3.11)`,
    es_ES: `Monetary View actualizado a 0.3.11.

- Más suave con el disco: durante el escaneo del historial, la base de datos se escribe en el disco unas 16 veces menos
- Interno: la propia aplicación crea sus bases de datos de escaneo sin copia en escritura (copy-on-write) en btrfs, como el paquete ya lo hace desde 0.3.10:1

[Notas completas de la versión](https://github.com/MarkSierra/BitcoinMonetaryView/releases/tag/v0.3.11)`,
    fr_FR: `Monetary View mis à jour en 0.3.11.

- Plus doux pour le disque : pendant l'analyse de l'historique, la base de données est écrite sur le disque environ 16 fois moins souvent
- Interne : l'application crée elle-même ses bases de données d'analyse sans copie sur écriture (copy-on-write) sur btrfs, comme le paquet le fait depuis 0.3.10:1

[Notes de version complètes](https://github.com/MarkSierra/BitcoinMonetaryView/releases/tag/v0.3.11)`,
    pl_PL: `Zaktualizowano Monetary View do 0.3.11.

- Łagodniej dla dysku: podczas skanowania historii baza danych jest zapisywana na dysk około 16 razy rzadziej
- Wewnętrzne: aplikacja sama tworzy swoje bazy danych skanowania bez kopiowania przy zapisie (copy-on-write) na btrfs, tak jak pakiet robi to od 0.3.10:1

[Pełne informacje o wydaniu](https://github.com/MarkSierra/BitcoinMonetaryView/releases/tag/v0.3.11)`,
  },
  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
