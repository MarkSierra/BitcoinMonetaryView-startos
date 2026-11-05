import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.4:0',
  releaseNotes: {
    en_US:
      'Monetary View 0.3.4: the About page, the description and the docs now state that Monetary View is an independent project, not affiliated with or endorsed by the Monetary Node project, and that it uses its published spam rules unchanged. The figures are unchanged.',
    de_DE:
      'Monetary View 0.3.4: Die Über-Seite, die Beschreibung und die Dokumentation sagen jetzt, dass Monetary View ein unabhängiges Projekt ist, das in keiner Verbindung zum Monetary-Node-Projekt steht und von ihm nicht unterstützt wird, und dass es dessen veröffentlichte Spam-Regeln unverändert verwendet. Die Zahlen bleiben gleich.',
    es_ES:
      'Monetary View 0.3.4: la página Acerca de, la descripción y la documentación indican ahora que Monetary View es un proyecto independiente, no afiliado al proyecto Monetary Node ni respaldado por él, y que usa sus reglas de spam publicadas sin cambios. Las cifras no cambian.',
    fr_FR:
      'Monetary View 0.3.4 : la page À propos, la description et la documentation indiquent désormais que Monetary View est un projet indépendant, ni affilié au projet Monetary Node ni approuvé par lui, et qu’il utilise ses règles anti-spam publiées sans modification. Les chiffres ne changent pas.',
    pl_PL:
      'Monetary View 0.3.4: strona O aplikacji, opis i dokumentacja informują teraz, że Monetary View to niezależny projekt, niepowiązany z projektem Monetary Node ani przez niego niepopierany, i że korzysta z jego opublikowanych reguł dotyczących spamu bez zmian. Liczby się nie zmieniają.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
