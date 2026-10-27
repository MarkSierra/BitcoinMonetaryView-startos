export const short = {
  en_US: 'See how much spam your node stores — read-only',
  de_DE: 'Zeigt, wie viel Spam dein Node speichert — nur lesend',
  es_ES: 'Mira cuánto spam almacena tu nodo — solo lectura',
  fr_FR: 'Voyez combien de spam stocke votre nœud — en lecture seule',
  pl_PL: 'Zobacz, ile spamu przechowuje Twój węzeł — tylko odczyt',
}

export const long = {
  en_US:
    'Monetary View analyses every block of your Bitcoin Core or Knots node with the rules of the Monetary Node project. It shows how much of your block storage is spam (inscriptions, oversized OP_RETURN, Stamps, oversized scriptSig), how much a Monetary Node would save, and how many spam entries sit in your UTXO set right now. It is strictly read-only: it uses a fixed whitelist of read-only RPC calls and never changes anything on your node. The dashboard is available in English, German, Spanish, French and Polish.',
  de_DE:
    'Monetary View analysiert jeden Block deines Bitcoin-Core- oder Knots-Nodes mit den Regeln des Monetary-Node-Projekts. Es zeigt, wie viel deines Blockspeichers Spam ist (Inscriptions, übergroße OP_RETURN, Stamps, übergroße scriptSig), wie viel ein Monetary Node einsparen würde und wie viele Spam-Einträge gerade in deinem UTXO-Set liegen. Es arbeitet ausschließlich lesend: Es nutzt eine feste Liste lesender RPC-Befehle und verändert nichts an deinem Node. Das Dashboard gibt es auf Englisch, Deutsch, Spanisch, Französisch und Polnisch.',
  es_ES:
    'Monetary View analiza cada bloque de tu nodo Bitcoin Core o Knots con las reglas del proyecto Monetary Node. Muestra cuánto de tu almacenamiento de bloques es spam (inscriptions, OP_RETURN sobredimensionados, Stamps, scriptSig sobredimensionados), cuánto ahorraría un Monetary Node y cuántas entradas de spam hay ahora mismo en tu conjunto UTXO. Es estrictamente de solo lectura: usa una lista blanca fija de llamadas RPC de lectura y nunca cambia nada en tu nodo. El panel está disponible en inglés, alemán, español, francés y polaco.',
  fr_FR:
    'Monetary View analyse chaque bloc de votre nœud Bitcoin Core ou Knots avec les règles du projet Monetary Node. Elle montre quelle part de votre stockage de blocs est du spam (inscriptions, OP_RETURN surdimensionnés, Stamps, scriptSig surdimensionnés), combien un Monetary Node économiserait et combien d’entrées de spam se trouvent actuellement dans votre ensemble UTXO. Elle fonctionne strictement en lecture seule : elle utilise une liste blanche fixe d’appels RPC de lecture et ne modifie jamais rien sur votre nœud. Le tableau de bord est disponible en anglais, allemand, espagnol, français et polonais.',
  pl_PL:
    'Monetary View analizuje każdy blok Twojego węzła Bitcoin Core lub Knots według reguł projektu Monetary Node. Pokazuje, jaka część przechowywanych bloków to spam (inscriptions, zbyt duże OP_RETURN, Stamps, zbyt duże scriptSig), ile zaoszczędziłby Monetary Node i ile wpisów spamu jest teraz w Twoim zbiorze UTXO. Działa wyłącznie w trybie tylko do odczytu: używa stałej białej listy odczytujących wywołań RPC i nigdy niczego nie zmienia w Twoim węźle. Panel jest dostępny po angielsku, niemiecku, hiszpańsku, francusku i polsku.',
}

export const bitcoindDescription = {
  en_US:
    'Monetary View reads blocks from your Bitcoin node (read-only RPC/REST).',
  de_DE:
    'Monetary View liest Blöcke von deinem Bitcoin-Node (nur lesend per RPC/REST).',
  es_ES:
    'Monetary View lee bloques de tu nodo Bitcoin (RPC/REST de solo lectura).',
  fr_FR:
    'Monetary View lit les blocs de votre nœud Bitcoin (RPC/REST en lecture seule).',
  pl_PL:
    'Monetary View odczytuje bloki z Twojego węzła Bitcoin (RPC/REST tylko do odczytu).',
}
