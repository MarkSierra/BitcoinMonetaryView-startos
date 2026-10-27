import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.0:0',
  releaseNotes: {
    en_US:
      'Monetary View 0.3.0: the dashboard and this package now speak English, German, Spanish, French and Polish (the translations are new; please report mistakes via the link in the dashboard footer). New on the overview: Trends and records, with spam in the last 30 days, this year against last year, and the biggest spam block and month. Better layout on tablets and phones, and the page no longer jumps when switching tabs.',
    de_DE:
      'Monetary View 0.3.0: Das Dashboard und dieses Paket gibt es jetzt auf Englisch, Deutsch, Spanisch, Französisch und Polnisch (die Übersetzungen sind neu; Fehler bitte über den Link unten im Dashboard melden). Neu in der Übersicht: Trends und Rekorde mit dem Spam der letzten 30 Tage, diesem Jahr im Vergleich zum Vorjahr und dem größten Spam-Block und -Monat. Besseres Layout auf Tablets und Handys, und die Seite springt beim Wechseln der Tabs nicht mehr.',
    es_ES:
      'Monetary View 0.3.0: el panel y este paquete ya están en inglés, alemán, español, francés y polaco (las traducciones son nuevas; informa de errores con el enlace al pie del panel). Novedad en la vista general: Tendencias y récords, con el spam de los últimos 30 días, este año frente al anterior y el mayor bloque y mes de spam. Mejor diseño en tabletas y móviles, y la página ya no salta al cambiar de pestaña.',
    fr_FR:
      'Monetary View 0.3.0 : le tableau de bord et ce paquet sont maintenant en anglais, allemand, espagnol, français et polonais (les traductions sont nouvelles ; signalez les erreurs via le lien en bas du tableau de bord). Nouveau dans la vue d’ensemble : Tendances et records, avec le spam des 30 derniers jours, cette année comparée à la précédente, et le plus gros bloc et mois de spam. Meilleure mise en page sur tablettes et téléphones, et la page ne saute plus quand on change d’onglet.',
    pl_PL:
      'Monetary View 0.3.0: panel i ten pakiet są teraz po angielsku, niemiecku, hiszpańsku, francusku i polsku (tłumaczenia są nowe; błędy zgłoś przez link w stopce panelu). Nowość w przeglądzie: Trendy i rekordy, czyli spam z ostatnich 30 dni, ten rok w porównaniu z poprzednim oraz największy blok i miesiąc spamu. Lepszy układ na tabletach i telefonach, a strona nie przeskakuje już przy zmianie zakładek.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
