# Contributing

Issues and pull requests are welcome. Changes to the app itself (dashboard, scanner, spam rules) belong in the
upstream repository, [MarkSierra/BitcoinMonetaryView](https://github.com/MarkSierra/BitcoinMonetaryView); this
repository only contains the StartOS packaging.

## Building

Requirements: Node.js, `make`, Docker and `start-cli` — see Start9's
[environment setup](https://docs.start9.com/packaging/0.4.0.x/environment-setup.html).

```sh
git clone --recurse-submodules https://github.com/MarkSierra/bitcoinmonetaryview-startos
cd bitcoinmonetaryview-startos
npm ci
npm run check     # TypeScript type check
make              # builds one .s9pk per architecture (x86_64, aarch64)
```

Install the resulting `.s9pk` on a StartOS server via System → Sideload. Every pull request and push is also
built by the *Build* workflow (artifacts are kept for 14 days).

## Before opening a pull request

- `npm run check` passes and `make` builds both architectures.
- The package installs, starts, the web UI loads and the health checks turn green on StartOS; uninstall and
  reinstall work.
- `README.md` still matches the code (actions, volumes, ports, dependencies, limitations) and contains no
  version numbers.
- Release notes and package texts are written in English and German (see `UPDATING.md`).

Updating the upstream version and publishing releases: [UPDATING.md](UPDATING.md).
