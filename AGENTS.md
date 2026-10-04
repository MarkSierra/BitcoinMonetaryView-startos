# AGENTS.md

This is a StartOS service-package repository — it builds a `.s9pk` for StartOS 0.4 that runs
[BitcoinMonetaryView](https://github.com/MarkSierra/BitcoinMonetaryView) (submodule `upstream/`).

Read `README.md` (technical reference) and `instructions.md` (end-user docs) before changing anything, and
keep both in sync with your changes. The packaging guide is at <https://docs.start9.com/packaging>.

## This repo

- **Read-only towards bitcoind is the point of the app.** Never mount bitcoind's volume writable, never add
  tasks/actions that change bitcoind's configuration.
- Connection settings are pinned as environment variables in `startos/main.ts`; only user-tunable settings
  live in `settings.json` (`startos/fileModels/settings.json.ts`).
