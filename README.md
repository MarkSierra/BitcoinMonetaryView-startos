<p align="center">
  <img src="icon.svg" alt="Monetary View logo" width="21%">
</p>

# Monetary View on StartOS

> Everything not listed in this document should behave the same as upstream
> Monetary View. If a feature, setting, or behavior is not mentioned here,
> the upstream documentation is accurate and fully applicable — see the
> Documentation section of `instructions.md` for links.

[Monetary View](https://github.com/MarkSierra/BitcoinMonetaryView) analyses every block of a Bitcoin
Core/Knots node with the [Monetary Node](https://github.com/sambitcoin/BitcoinMonetaryNode) rules and shows
how much spam the node stores, what a Monetary Node would save, and the spam in the current UTXO set.
It is an independent project, not affiliated with or endorsed by the Monetary Node project; it uses its
published spam rules unchanged. It is strictly read-only towards the node.

- **Upstream repo:** <https://github.com/MarkSierra/BitcoinMonetaryView>
- **Wrapper repo:** <https://github.com/Start9-Community/bitcoinmonetaryview-startos>

---

## Table of Contents

- [Image and Container Runtime](#image-and-container-runtime)
- [Volume and Data Layout](#volume-and-data-layout)
- [File Models](#file-models)
- [Dependencies](#dependencies)
- [Network Access and Interfaces](#network-access-and-interfaces)
- [Installation and First-Run Flow](#installation-and-first-run-flow)
- [Actions](#actions)
- [Tasks](#tasks)
- [Health Checks](#health-checks)
- [Backups and Restore](#backups-and-restore)
- [Limitations and Differences](#limitations-and-differences)
- [Quick Reference for AI Consumers](#quick-reference-for-ai-consumers)

---

## Image and Container Runtime

The image is built from the `upstream/` submodule on the same Python slim base image upstream's own
`Dockerfile` uses. The app uses only the Python standard library; no packages are installed.

| Property      | Value                                                         |
| ------------- | ------------------------------------------------------------- |
| Image         | built from `Dockerfile`: Python slim base + `upstream/`       |
| Architectures | x86_64, aarch64, riscv64                                      |
| Command       | `python3 -m bitcoinmonetaryview --data-dir /data`             |
| User          | root inside the subcontainer (bitcoind's cookie is root-only) |

| Subcontainer          | Purpose                           |
| --------------------- | --------------------------------- |
| `bitcoinmonetaryview` | the scanner and the web dashboard |

## Volume and Data Layout

The package's own volume holds the settings and the result databases; bitcoind's volume is mounted read-only
for its RPC cookie.

| Volume                      | Mount point     | Contents                                                       |
| --------------------------- | --------------- | -------------------------------------------------------------- |
| `main`                      | `/data`         | `settings.json`, per-network result databases (`/data/<net>/`) |
| bitcoind `main` (read-only) | `/mnt/bitcoind` | only `.cookie` is read (RPC credentials)                       |

`/data` carries the btrfs nodatacow attribute (`chattr +C`), kept by `nocow.py` in the image, so the result databases the app creates inherit it. Their constant small
writes would otherwise fragment them on the copy-on-write data drive. The databases have no btrfs
checksums as a result; they are rebuildable from the node.

## File Models

One file model, the app's own settings file, which the app watches and reloads between scan steps — usually within seconds, but not during a long node call such as reading the UTXO set size.

| File            | Volume | Fields                                                                                     |
| --------------- | ------ | ------------------------------------------------------------------------------------------ |
| `settings.json` | `main` | `speed_profile`, `scan_window`, `timezone`, `carrier_policy`, `auth_user`, `auth_password` |

Seeded with defaults on every init, which fills missing fields and leaves the rest. **Scan Settings**,
**Spam Rules** and **Set Web Password** rewrite only their own fields; any other key a hand edit adds survives. Connection, bind
address, port and REST use are not in this file: they are pinned as environment variables (see the quick
reference), which take precedence over the file in the app. The app runs in managed mode
(`BMV_MANAGED_BY=startos`), so the web UI shows settings read-only and points to the StartOS actions.

## Dependencies

One required dependency, used read-only. No bitcoind configuration is changed.

| Dependency | Kind    | Health checks               | Mount                                | Purpose                                   |
| ---------- | ------- | --------------------------- | ------------------------------------ | ----------------------------------------- |
| `bitcoind` | running | `bitcoind`, `sync-progress` | `main` → `/mnt/bitcoind` (read-only) | blocks via read-only RPC/REST; RPC cookie |

Bitcoin Core and the Knots (pre-RDTS) and Roots flavors are accepted. The package connects over the LXC bridge to bitcoind's
`rpc-local` host (RPC and REST, binary block downloads) when it is published, otherwise to the `rpc` proxy
(JSON-RPC only; the app then uses RPC and falls back from batch requests). Pruned nodes work with reduced
coverage.

## Network Access and Interfaces

One web interface serves the dashboard and its API. The app makes no external requests; it only talks to
bitcoind.

| Interface | Id   | Type | Internal Port | Protocol |
| --------- | ---- | ---- | ------------- | -------- |
| Web UI    | `ui` | ui   | 8338          | HTTP     |

## Installation and First-Run Flow

The web interface uses the app's own HTTP basic auth (`auth_user` / `auth_password`, compared as stored).
A critical task blocks the first start until **Set Web Password** generates the password; the username is
always `admin`. On start the app connects to bitcoind, runs a quick pass over the latest
1,000 blocks, a sample pass (every 100th block of the remaining history, for an early whole-chain estimate),
the full history scan (genesis to tip), and then follows new blocks.

## Actions

Four user-facing actions, all of which change only Monetary View's own data.

| Action              | ID                 | Purpose                                              |
| ------------------- | ------------------ | ---------------------------------------------------- |
| Set Web Password    | `set-web-password` | generate the web interface password                  |
| Scan Settings       | `scan-settings`    | speed profile, optional daily scan window, time zone |
| Spam Rules          | `spam-rules`       | carrier policy on/off                                |
| Rescan From Scratch | `rescan`           | delete the `/data/<network>/` result databases       |

- **Set Web Password** — available in any state. Run once at install (its task asks for it), and again to
  rotate. Generates a 32-character password, writes it to `settings.json` and shows it once. A running
  service is restarted, so only the new password works from then on (the app otherwise reloads
  `settings.json` only between scan steps). Confirms before replacing an existing password.
- **Scan Settings** — run any time to make the scan lighter or heavier on the node, or confine it to night
  hours. Applies without a restart, once the app next reloads its settings; safe to repeat.
- **Spam Rules** — run only to change how payment envelopes are counted. A changed value makes the app delete
  its results and rescan the whole chain (a day or more); re-submitting the same value does nothing.
- **Rescan From Scratch** — available while the service is stopped; run it to discard results and start over.
  Settings are kept; the next start begins the full scan again.

## Tasks

One task, raised by init whenever `auth_password` is empty.

| Task             | Severity | Raised when               | Cleared by         |
| ---------------- | -------- | ------------------------- | ------------------ |
| Set Web Password | critical | no web password is stored | running the action |

## Health Checks

Two checks while bitcoind publishes its RPC interface; one placeholder while it does not.

| Check           | Displayed          | Method                                                                       |
| --------------- | ------------------ | ---------------------------------------------------------------------------- |
| `primary`       | Web Interface      | port 8338 listening                                                          |
| `scan-progress` | Scan Progress      | `GET /api/status` every 30 s, with the stored credential: phase and progress |
| `bitcoind-rpc`  | Bitcoin connection | shown only while bitcoind has no RPC binding                                 |

**Scan Progress** stays in the loading state, with the phase and its percentage, until the scan is live, then
turns green. It fails only when the app reports an error, with the app's own message — usually that bitcoind
refused the cookie or is unreachable; the service logs say which. **Bitcoin connection** means bitcoind is
installed but has not published its RPC interface yet; the package restarts itself once it does.

## Backups and Restore

Backups copy `main` except the per-network result databases (`/mainnet`, `/testnet3`, `/testnet4`, `/signet`,
`/regtest`): they are several GB and can always be rebuilt from the node. Only `settings.json` is backed up,
so after a restore the app scans from scratch.

## Limitations and Differences

1. One shared login (`admin`) for everyone using the web interface; the app has no user accounts.
2. Requires the bitcoind service on the same server; remote nodes are not supported in the package.
3. Settings are changed through the StartOS actions only; the web UI shows them read-only.

---

## Quick Reference for AI Consumers

```yaml
package_id: bitcoinmonetaryview
architectures: [x86_64, aarch64, riscv64]
subcontainers: [bitcoinmonetaryview]
volumes:
  main: /data
dependency_mounts:
  bitcoind/main: /mnt/bitcoind # read-only, only .cookie is read
file_models:
  - main/settings.json
interfaces:
  ui: { type: ui, port: 8338 }
dependencies: [bitcoind]
startos_managed_env_vars:
  - BMV_MANAGED_BY
  - BMV_BIND
  - BMV_PORT
  - BMV_RPC_URL
  - BMV_RPC_COOKIE_FILE
  - BMV_USE_REST
actions:
  - scan-settings
  - spam-rules
  - rescan
  - set-web-password
tasks: [set-web-password]
health_checks: [primary, scan-progress, bitcoind-rpc]
```
