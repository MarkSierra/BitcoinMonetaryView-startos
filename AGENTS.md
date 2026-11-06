# AGENTS.md

This is a StartOS service-package repository — it builds a `.s9pk` for StartOS.

Develop it inside a StartOS packaging workspace created by `start-cli s9pk init-workspace`,
which provides the packaging guide and agent context one level up. If you're reading this in a
bare clone with no workspace, the full guide is at <https://docs.start9.com/packaging>.

- The app is built from the `upstream/` submodule. Changes to the app itself (dashboard, scanner,
  spam rules) belong in [MarkSierra/BitcoinMonetaryView](https://github.com/MarkSierra/BitcoinMonetaryView),
  not here. Clone with `--recurse-submodules`.
- **Read-only towards bitcoind is the point of the app.** Never mount bitcoind's volume writable, never
  add tasks or actions that change bitcoind's configuration.
- Connection settings are pinned as environment variables in `startos/main.ts`, which beat
  `settings.json` in the app; only user-tunable settings belong in `startos/fileModels/settings.json.ts`.
- Changes reach users through pull requests to
  [Start9-Community/bitcoinmonetaryview-startos](https://github.com/Start9-Community/bitcoinmonetaryview-startos);
  each merge publishes to Community Beta. Sync from that fork before branching. Test every change on StartOS
  first with a `-beta.N` build from a separate test branch, and open the pull request with the final version
  only (see "Testing before the pull request" in `UPDATING.md`).
