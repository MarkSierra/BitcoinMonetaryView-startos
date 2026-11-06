# Monetary View

## Documentation

- [Monetary View README](https://github.com/MarkSierra/BitcoinMonetaryView/blob/main/README.md) — what is measured and how.
- [Monetary Node README](https://github.com/sambitcoin/BitcoinMonetaryNode/blob/main/README.md) — the project the spam rules come from.

## What you get on StartOS

- **A dashboard** with spam per block, spam over the whole history of Bitcoin, the storage a Monetary Node
  would save, and the spam entries currently in your UTXO set.
- **Any period you like**: spam statistics for the last 24 hours, 30 days, a year, since Ordinals, or any
  dates or block heights.
- **Any single block**: look it up by height or hash — even one the scan has not reached yet.
- **Automatic connection** to your Bitcoin service — nothing to enter.
- **A gentle scan**: the default _Eco_ speed keeps the load on your node low.

## Getting set up

1. Install Bitcoin first, and let it sync fully.
2. Run **Set Web Password** and save the username and password it shows you.
3. Start Monetary View. The **Scan Progress** health check shows what it is doing.
4. Open the **Web UI** interface and sign in. After a few minutes you see the latest 1,000 blocks, and shortly after an
   **estimate for the whole chain** (marked ≈, from a sample of every 100th block). Then the full history scan
   runs and replaces the estimate with exact figures. On Start9 hardware it takes roughly 12–24 hours at
   _Full speed_ and 2–4 days at _Eco_.

## Using Monetary View

- **Set Web Password** (action): generates a new password and shows it once; save it. If the service is
  running, it restarts, and only the new password works from then on.
- **Scan Settings** (action): speed profile, and an optional daily time window (e.g. only at night).
  Applies without a restart.
- **Spam Rules** (action): carrier policy on/off. Changing it deletes the results and rescans the chain.
- **Rescan From Scratch** (action): deletes the results; the next start begins a fresh scan.
- **Pause / Resume** is available in the web interface.

## Limitations

- On a **pruned** Bitcoin node only the blocks still stored can be analysed, and the spam UTXO figure is
  incomplete.
- The analysis results are not backed up (they can always be rebuilt by rescanning); your settings are.
