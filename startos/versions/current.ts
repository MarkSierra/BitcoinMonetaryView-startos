import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.14:1',
  releaseNotes: {
    en_US: `Requires StartOS 0.4.2 or later.

Monetary View's access to Bitcoin's data is limited to its RPC credentials. Update Bitcoin when StartOS asks. Until you do, Monetary View waits and tells you to update Bitcoin instead of failing to start.`,
    de_DE: `Erfordert StartOS 0.4.2 oder neuer.

Der Zugriff von Monetary View auf die Daten von Bitcoin ist auf dessen RPC-Zugangsdaten beschränkt. Aktualisiere Bitcoin, sobald StartOS dazu auffordert. Bis dahin wartet Monetary View und fordert dich auf, Bitcoin zu aktualisieren, statt fehlerhaft zu starten.`,
    es_ES: `Requiere StartOS 0.4.2 o posterior.

El acceso de Monetary View a los datos de Bitcoin se limita a sus credenciales RPC. Actualiza Bitcoin cuando StartOS lo pida. Hasta entonces, Monetary View espera y te indica que actualices Bitcoin en lugar de fallar al iniciarse.`,
    fr_FR: `Nécessite StartOS 0.4.2 ou une version ultérieure.

L’accès de Monetary View aux données de Bitcoin se limite à ses identifiants RPC. Mettez Bitcoin à jour lorsque StartOS le demande. D’ici là, Monetary View attend et vous invite à mettre Bitcoin à jour au lieu d’échouer au démarrage.`,
    pl_PL: `Wymaga StartOS 0.4.2 lub nowszego.

Dostęp Monetary View do danych Bitcoina ogranicza się do jego danych uwierzytelniających RPC. Zaktualizuj Bitcoina, gdy StartOS o to poprosi. Do tego czasu Monetary View czeka i prosi o aktualizację Bitcoina, zamiast kończyć uruchamianie błędem.`,
  },
  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
