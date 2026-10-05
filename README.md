<p align="center">
  <img src="icon.svg" alt="Monetary View logo" width="21%">
</p>

# Monetary View on StartOS

> **Upstream docs:** <https://github.com/MarkSierra/BitcoinMonetaryView#readme>
>
> Everything not listed in this document should behave the same as upstream
> BitcoinMonetaryView. If a feature, setting, or behavior is not mentioned here,
> the upstream documentation is accurate and fully applicable.

[BitcoinMonetaryView](https://github.com/MarkSierra/BitcoinMonetaryView) analyses every block of a Bitcoin
Core/Knots node with the [Monetary Node](https://github.com/sambitcoin/BitcoinMonetaryNode) rules and shows
how much spam the node stores, what a Monetary Node would save, and the spam in the current UTXO set.
Strictly read-only towards the node.

---

## Table of Contents

- [Image and Container Runtime](#image-and-container-runtime)
- [Volume and Data Layout](#volume-and-data-layout)
- [Installation and First-Run Flow](#installation-and-first-run-flow)
- [Configuration Management](#configuration-management)
- [Network Access and Interfaces](#network-access-and-interfaces)
- [Actions (StartOS UI)](#actions-startos-ui)
- [Backups and Restore](#backups-and-restore)
- [Health Checks](#health-checks)
- [Dependencies](#dependencies)
- [Limitations and Differences](#limitations-and-differences)
- [What Is Unchanged from Upstream](#what-is-unchanged-from-upstream)
- [Contributing](#contributing)
- [Quick Reference for AI Consumers](#quick-reference-for-ai-consumers)

---

## Image and Container Runtime

| Property      | Value                                                          |
| ------------- | -------------------------------------------------------------- |
| Image         | built from `Dockerfile`: Python slim base image + `upstream/`  |
| Architectures | x86_64, aarch64                                                |
| Command       | `python3 -m bitcoinmonetaryview --data-dir /data`              |
| User          | root inside the subcontainer (bitcoind's cookie is root-only)  |

The app uses only the Python standard library; no packages are installed.

## Volume and Data Layout

| Volume / mount               | Mount Point     | Purpose                                                        |
| ---------------------------- | --------------- | -------------------------------------------------------------- |
| `main`                       | `/data`         | `settings.json`, per-network result databases (`/data/<net>/`) |
| bitcoind `main` (read-only)  | `/mnt/bitcoind` | only `.cookie` is read (RPC credentials)                       |

## Installation and First-Run Flow

No setup. On start, `settings.json` is seeded with defaults and the app connects to bitcoind. It then runs a
quick pass over the latest 1,000 blocks, a sample pass (every 100th block of the remaining history, for an
early whole-chain estimate), the full history scan (genesis → tip), and finally follows new blocks.

## Configuration Management

| Setting                                   | Managed by                    | Where                             |
| ----------------------------------------- | ----------------------------- | --------------------------------- |
| Speed profile, scan window, time zone     | StartOS action *Scan Settings* | `/data/settings.json`            |
| Carrier policy (spam rules)               | StartOS action *Spam Rules*    | `/data/settings.json`            |
| Node connection, bind address, port, REST | StartOS (environment)          | fixed, see the quick reference   |
| All other upstream settings               | upstream defaults              | —                                 |

The app watches `settings.json` and applies changes live (a carrier policy change triggers a rescan inside the
app). It runs in managed mode (`BMV_MANAGED_BY=startos`): settings are shown read-only in the web UI and refer
to the StartOS actions.

## Network Access and Interfaces

| Interface | Port | Protocol | Purpose           |
| --------- | ---- | -------- | ----------------- |
| Web UI    | 8338 | HTTP     | dashboard and API |

The Host-header check and authentication are left to the StartOS proxy. The app makes no external requests;
it only talks to bitcoind.

## Actions (StartOS UI)

| Action              | ID              | Availability  | Effect                                                   |
| ------------------- | --------------- | ------------- | -------------------------------------------------------- |
| Scan Settings       | `scan-settings` | any status    | speed profile, optional daily scan window, time zone     |
| Spam Rules          | `spam-rules`    | any status    | carrier policy on/off (triggers a rescan)                |
| Rescan From Scratch | `rescan`        | only stopped  | deletes the `/data/<network>/` result databases          |

## Backups and Restore

`main` is backed up excluding `/mainnet`, `/testnet3`, `/testnet4`, `/signet` and `/regtest`: the result
databases are several GB and can always be rebuilt from the node. Only `settings.json` is backed up. After a
restore the app rescans.

## Health Checks

| Check              | Source                                        | Meaning                                       |
| ------------------ | --------------------------------------------- | --------------------------------------------- |
| Web Interface      | port 8338 listening                           | dashboard reachable                           |
| Scan Progress      | `GET /api/status` (every 30 s)                | loading with phase + %, success when live     |
| Bitcoin connection | shown only while bitcoind has no RPC binding  | waiting for bitcoind                          |

## Dependencies

| Dependency | Kind    | Health checks               | Mount                                  | Purpose                                  |
| ---------- | ------- | --------------------------- | -------------------------------------- | ---------------------------------------- |
| `bitcoind` | running | `bitcoind`, `sync-progress` | `main` → `/mnt/bitcoind` (read-only)   | blocks via read-only RPC/REST; RPC cookie |

Connection: `sdk.host.getBridgeAddress` → bitcoind's `rpc-local` host (RPC **and** REST, binary block
downloads) if published, otherwise the `rpc` proxy (JSON-RPC only; the app then uses RPC and falls back from
batch requests automatically). Pruned nodes work with reduced coverage. No bitcoind configuration is changed.

## Limitations and Differences

1. No app-level login: the StartOS proxy handles access. The UI shows public chain statistics only and cannot
   act on the node ("Analyse this block now" reads one block through the same read-only client,
   CSRF-protected, one at a time with a cooldown).
2. Requires a running, synced `bitcoind` service on the same server. Remote nodes are not supported in the
   StartOS package (use the upstream app directly for that).
3. Settings are changed through the StartOS actions only; the web UI shows them read-only.

## What Is Unchanged from Upstream

- The spam rules (vendored unchanged from the Monetary Node project) and all figures.
- The dashboard: overview, blocks, history with custom ranges, UTXO set, block search and on-demand analysis,
  share card, CSV/JSON export.
- The read-only node client with its RPC method whitelist and block verification.
- Pause/resume of the scan from the web UI.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for building the package, and [UPDATING.md](UPDATING.md) for updating
the upstream version and publishing releases.

---

## Quick Reference for AI Consumers

```yaml
package_id: bitcoinmonetaryview
architectures: [x86_64, aarch64]
volumes:
  main: /data
dependency_mounts:
  bitcoind/main: /mnt/bitcoind   # read-only, only .cookie is read
ports:
  ui: 8338
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
health_checks: [primary, scan-progress]
settings_file: /data/settings.json
```
