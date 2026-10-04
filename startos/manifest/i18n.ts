export const short = {
  en_US: 'See how much spam your node stores — read-only',
  de_DE: 'Zeigt, wie viel Spam deine Node speichert — nur lesend',
}

export const long = {
  en_US:
    'Monetary View analyses every block of your Bitcoin Core or Knots node with the rules of the Monetary Node project. It shows how much of your block storage is spam (inscriptions, oversized OP_RETURN, Stamps, oversized scriptSig), how much a Monetary Node would save, and how many spam entries sit in your UTXO set right now. It is strictly read-only: it uses a fixed whitelist of read-only RPC calls and never changes anything on your node.',
  de_DE:
    'Monetary View analysiert jeden Block deiner Bitcoin-Core- oder Knots-Node mit den Regeln des Monetary-Node-Projekts. Es zeigt, wie viel deines Blockspeichers Spam ist (Inscriptions, übergroße OP_RETURN, Stamps, übergroße scriptSig), wie viel eine Monetary Node einsparen würde und wie viele Spam-Einträge gerade in deinem UTXO-Set liegen. Es arbeitet ausschließlich lesend: Es nutzt eine feste Liste lesender RPC-Befehle und verändert nichts an deiner Node.',
}

export const bitcoindDescription = {
  en_US:
    'Monetary View reads blocks from your Bitcoin node (read-only RPC/REST).',
  de_DE:
    'Monetary View liest Blöcke von deiner Bitcoin-Node (nur lesend per RPC/REST).',
}
