<p align="center">
  <img src="icon.svg" alt="Monetary View logo" width="21%">
</p>

# Monetary View on StartOS

> Everything not listed in this document behaves as described in the upstream
> [BitcoinMonetaryView README](https://github.com/MarkSierra/BitcoinMonetaryView#readme).

[BitcoinMonetaryView](https://github.com/MarkSierra/BitcoinMonetaryView) analyses every block of a Bitcoin
Core/Knots node with the [Monetary Node](https://github.com/sambitcoin/BitcoinMonetaryNode) rules and shows
how much spam the node stores, what a Monetary Node would save, and the spam in the current UTXO set.
Strictly read-only towards the node.

- **Upstream repo:** <https://github.com/MarkSierra/BitcoinMonetaryView>
- **Wrapper repo:** <https://github.com/MarkSierra/bitcoinmonetaryview-startos>

---

## Image and Container Runtime

| Property      | Value                                                        |
| ------------- | ------------------------------------------------------------ |
| Image         | built from `Dockerfile` (python:3.12-slim + `upstream/`)     |
| Architectures | x86_64, aarch64                                              |
| Command       | `python3 -m bitcoinmonetaryview --data-dir /data`            |
| User          | root inside the subcontainer (bitcoind's cookie is root-only) |

## Volume and Data Layout

| Volume / mount               | Mount Point     | Purpose                                                        |
| ---------------------------- | --------------- | -------------------------------------------------------------- |
| `main`                       | `/data`         | `settings.json`, per-network result databases (`/data/<net>/`) |
| bitcoind `main` (read-only)  | `/mnt/bitcoind` | only `.cookie` is read (RPC credentials)                       |

## File Models

`startos/fileModels/settings.json.ts` → `/data/settings.json`: `speed_profile`, `scan_window`, `timezone`,
`carrier_policy`. The app watches the file and applies changes live (a `carrier_policy` change triggers a
rescan inside the app). All other upstream settings are left at their defaults or pinned via environment.

## Dependencies

| Dependency | Kind    | Health checks                | Why                                         |
| ---------- | ------- | ---------------------------- | ------------------------------------------- |
| `bitcoind` | running | `bitcoind`, `sync-progress`  | blocks via read-only RPC/REST; RPC cookie   |

Connection: `sdk.host.getBridgeAddress` → bitcoind's `rpc-local` host (port 58332: RPC **and** REST, binary
block downloads) if published, otherwise the `rpc` proxy (port 8332, JSON-RPC only; the app then uses RPC and
falls back from batch requests automatically). Pruned nodes work with reduced coverage; no bitcoind
configuration is changed.

## Network Access and Interfaces

| Interface | Port | Protocol | Purpose            |
| --------- | ---- | -------- | ------------------ |
| Web UI    | 8338 | HTTP     | dashboard and API  |

The app runs in managed mode (`BMV_MANAGED_BY=startos`): settings are read-only in the web UI, the Host-header
check is delegated to the StartOS proxy, *Rescan* is only available as an action.

## Installation and First-Run Flow

No setup. On start, `settings.json` is seeded with defaults, the app connects to bitcoind and begins with a
quick pass over the latest 1,000 blocks, then scans the full history (genesis → tip), then follows new blocks.

## Actions

| Action              | Status       | Effect                                                     |
| ------------------- | ------------ | ---------------------------------------------------------- |
| Scan Settings       | any          | speed profile, optional daily scan window, time zone      |
| Spam Rules          | any          | carrier policy on/off (rescan)                             |
| Rescan From Scratch | only stopped | deletes `/data/<network>/` result databases               |

## Health Checks

| Check            | Source                                   | Meaning                                         |
| ---------------- | ---------------------------------------- | ----------------------------------------------- |
| Web Interface    | port 8338 listening                      | dashboard reachable                             |
| Scan Progress    | `GET /api/status` (every 30 s)           | loading with phase + %, success when live       |
| Bitcoin connection | shown only while bitcoind has no RPC binding | waiting for bitcoind                       |

## Backups and Restore

`main` is backed up excluding `/mainnet`, `/testnet3`, `/testnet4`, `/signet`, `/regtest` (rebuildable result
databases, several GB). After a restore the app rescans.

## Limitations and Differences

- No app-level login (the UI shows public chain statistics only and cannot act on the node).
- Requires a running, synced `bitcoind` service; remote nodes are not supported in the StartOS package (use the
  upstream app directly for that).

## Quick Reference for AI Consumers

```yaml
package_id: bitcoinmonetaryview
image: built from Dockerfile (upstream submodule)
architectures: [x86_64, aarch64]
volumes: { main: /data }
dependency_mounts: { bitcoind/main: /mnt/bitcoind (read-only, cookie only) }
ports: { ui: 8338 }
dependencies: [bitcoind]
actions: [scan-settings, spam-rules, rescan]
health_checks: [primary (Web Interface), scan-progress]
settings_file: /data/settings.json
env: [BMV_MANAGED_BY=startos, BMV_BIND, BMV_PORT, BMV_RPC_URL, BMV_RPC_COOKIE_FILE, BMV_USE_REST]
```

## Building

```sh
git clone --recurse-submodules https://github.com/MarkSierra/bitcoinmonetaryview-startos
cd bitcoinmonetaryview-startos
npm ci && make            # needs start-cli, see https://docs.start9.com/packaging/environment-setup.html
```

Sideload the resulting `bitcoinmonetaryview.s9pk` in StartOS (System → Sideload).
