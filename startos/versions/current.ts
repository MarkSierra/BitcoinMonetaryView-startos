import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.2:0',
  releaseNotes: {
    en_US:
      'Monetary View 0.3.2: the dashboard can be installed as an app: your browser offers "Install" (on phones "Add to Home Screen") and it then opens in its own window with its own icon. It still shows your node\'s live figures; nothing is cached offline. Clicking "Biggest spam month" in Trends and records now opens that month as a custom range on the History page.',
    de_DE:
      'Monetary View 0.3.2: Das Dashboard lässt sich als App installieren: Der Browser bietet „Installieren“ an (auf Handys „Zum Startbildschirm hinzufügen“), danach öffnet es sich in einem eigenen Fenster mit eigenem Symbol. Es zeigt weiterhin die aktuellen Werte deines Nodes; offline wird nichts gespeichert. Ein Klick auf „Größter Spam-Monat“ unter Trends und Rekorde öffnet diesen Monat jetzt als eigenen Zeitraum auf der Seite „Verlauf“.',
    es_ES:
      'Monetary View 0.3.2: el panel se puede instalar como app: tu navegador ofrece «Instalar» (en el móvil «Añadir a pantalla de inicio») y luego se abre en su propia ventana con su propio icono. Sigue mostrando las cifras en vivo de tu nodo; no se guarda nada sin conexión. Al hacer clic en «Mayor mes de spam» en Tendencias y récords, ese mes se abre ahora como rango personalizado en la página Historial.',
    fr_FR:
      'Monetary View 0.3.2 : le tableau de bord peut s’installer comme une application : votre navigateur propose « Installer » (sur téléphone « Ajouter à l’écran d’accueil ») et il s’ouvre ensuite dans sa propre fenêtre, avec sa propre icône. Il affiche toujours les chiffres en direct de votre nœud ; rien n’est mis en cache hors ligne. Un clic sur « Plus gros mois de spam » dans Tendances et records ouvre désormais ce mois comme plage personnalisée sur la page Historique.',
    pl_PL:
      'Monetary View 0.3.2: panel można zainstalować jako aplikację: przeglądarka proponuje „Zainstaluj” (na telefonie „Dodaj do ekranu głównego”), a potem otwiera się on we własnym oknie z własną ikoną. Nadal pokazuje bieżące liczby z Twojego węzła; nic nie jest zapisywane offline. Kliknięcie „Największy miesiąc spamu” w Trendach i rekordach otwiera teraz ten miesiąc jako własny zakres na stronie Historia.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
