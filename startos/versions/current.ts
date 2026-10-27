import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.3:0',
  releaseNotes: {
    en_US:
      'Monetary View 0.3.3: a dashboard tab or installed app window that stays open now reloads itself once when the app has been updated, so it no longer keeps showing the old version until you reload it by hand.',
    de_DE:
      'Monetary View 0.3.3: Ein Dashboard-Tab oder ein installiertes App-Fenster, das offen bleibt, lädt sich jetzt nach einem Update der App einmal selbst neu und zeigt nicht mehr die alte Version, bis man von Hand neu lädt.',
    es_ES:
      'Monetary View 0.3.3: una pestaña del panel o una ventana de la app instalada que sigue abierta ahora se recarga sola una vez cuando la app se ha actualizado, así que ya no sigue mostrando la versión anterior hasta que la recargas a mano.',
    fr_FR:
      'Monetary View 0.3.3 : un onglet du tableau de bord ou une fenêtre de l’application installée qui reste ouvert se recharge désormais une fois tout seul après une mise à jour de l’application ; il n’affiche donc plus l’ancienne version jusqu’à ce que vous le rechargiez à la main.',
    pl_PL:
      'Monetary View 0.3.3: otwarta karta panelu lub okno zainstalowanej aplikacji odświeża się teraz samo jeden raz po aktualizacji aplikacji, więc nie pokazuje już starej wersji, dopóki nie odświeżysz jej ręcznie.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
