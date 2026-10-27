import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.1:0',
  releaseNotes: {
    en_US:
      'Monetary View 0.3.1: "Transactions touched" is now called "Transactions with spam": the share of transactions a Monetary Node changes (the figure is the same). The About page now explains this figure and Trends and records, lists the five languages, and names both inscription envelope forms the rules detect. Figure tiles no longer show colour squares (those are kept for chart legends), and the biggest spam block, which you can click, is now the last tile with an arrow.',
    de_DE:
      'Monetary View 0.3.1: „Betroffene Transaktionen“ heißt jetzt „Transaktionen mit Spam“: der Anteil der Transaktionen, die ein Monetary Node verändert (der Wert bleibt gleich). Die Seite „Über“ erklärt jetzt diesen Wert sowie Trends und Rekorde, nennt die fünf Sprachen und beide Formen von Inscription-Envelopes, die die Regeln erkennen. Die Kennzahl-Kacheln zeigen keine Farbquadrate mehr (die bleiben den Diagrammlegenden vorbehalten), und der größte Spam-Block, den man anklicken kann, ist jetzt die letzte Kachel mit einem Pfeil.',
    es_ES:
      'Monetary View 0.3.1: «Transacciones afectadas» ahora se llama «Transacciones con spam»: la proporción de transacciones que un Monetary Node modifica (la cifra es la misma). La página Acerca de ahora explica esta cifra y Tendencias y récords, enumera los cinco idiomas y nombra las dos formas de envelopes de inscriptions que detectan las reglas. Las tarjetas de cifras ya no muestran cuadrados de color (quedan para las leyendas de los gráficos), y el mayor bloque de spam, en el que se puede hacer clic, es ahora la última tarjeta, con una flecha.',
    fr_FR:
      'Monetary View 0.3.1 : « Transactions touchées » s’appelle désormais « Transactions avec spam » : la part des transactions qu’un Monetary Node modifie (le chiffre est le même). La page À propos explique maintenant ce chiffre ainsi que Tendances et records, liste les cinq langues et nomme les deux formes d’envelopes d’inscriptions que les règles détectent. Les tuiles de chiffres n’affichent plus de carrés de couleur (réservés aux légendes des graphiques), et le plus gros bloc de spam, sur lequel on peut cliquer, est désormais la dernière tuile, avec une flèche.',
    pl_PL:
      'Monetary View 0.3.1: „Zmienione transakcje” nazywają się teraz „Transakcje ze spamem”: to odsetek transakcji, które Monetary Node zmienia (liczba jest ta sama). Strona O aplikacji wyjaśnia teraz tę liczbę oraz Trendy i rekordy, wymienia pięć języków i obie formy envelopes inscriptions wykrywane przez reguły. Kafelki z liczbami nie mają już kolorowych kwadratów (zostają w legendach wykresów), a największy blok spamu, który można kliknąć, jest teraz ostatnim kafelkiem ze strzałką.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
