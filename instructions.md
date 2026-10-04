# Monetary View

Monetary View shows how much spam your Bitcoin node stores and what a Monetary Node would save. It reads
every block from your Bitcoin Core or Knots service and applies the rules of the
[Monetary Node](https://github.com/sambitcoin/BitcoinMonetaryNode) project. It is strictly read-only: it never
changes anything on your Bitcoin node.

## Documentation

- [BitcoinMonetaryView README](https://github.com/MarkSierra/BitcoinMonetaryView#readme) — what is measured and how.
- [Monetary Node](https://github.com/sambitcoin/BitcoinMonetaryNode) — the project the spam rules come from.

## What you get on StartOS

- **A dashboard** with spam per block, spam over the whole history of Bitcoin, the storage a Monetary Node
  would save, and the spam entries currently in your UTXO set.
- **Any period you like**: spam statistics for the last 24 hours, 30 days, a year, since Ordinals, or any
  dates or block heights.
- **Any single block**: look it up by height or hash — even one the scan has not reached yet.
- **Automatic connection** to your Bitcoin service — nothing to enter.
- **A gentle scan**: the default *Eco* speed keeps the load on your node low.

## Getting set up

1. Make sure your Bitcoin service is installed, running and fully synced.
2. Start Monetary View. The **Scan Progress** health check shows what it is doing.
3. Open the **Web UI** interface. After a few minutes you see the latest 1,000 blocks, and shortly after an
   **estimate for the whole chain** (marked ≈, from a sample of every 100th block). Then the full history scan
   runs and replaces the estimate with exact figures. On Start9 hardware it takes roughly 12–24 hours at
   *Full speed* and 2–4 days at *Eco*.

## Using Monetary View

- **Scan Settings** (action): speed profile, and an optional daily time window (e.g. only at night).
  Takes effect within seconds.
- **Spam Rules** (action): carrier policy on/off. Changing it deletes the results and rescans the chain.
- **Rescan From Scratch** (action, service stopped): deletes the results and starts a fresh scan.
- **Pause / Resume** is available in the web interface.

## Limitations

- On a **pruned** Bitcoin node only the blocks still stored can be analysed, and the spam UTXO figure is
  incomplete.
- The web interface has no password of its own. It only shows public chain statistics and cannot change your
  node (at most it asks your node to read one block on request, with a cooldown); share its address only with
  people you trust anyway.
- The analysis results are not backed up (they can always be rebuilt by rescanning); your settings are.
