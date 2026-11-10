import { sdk } from './sdk'
import { networkDirs } from './utils'

// Settings are backed up; the analysis databases are rebuilt by rescanning, so they are
// excluded to keep backups small, with the staging copies nocow.py leaves while converting them.
export const { createBackup, restoreInit } = sdk.setupBackups(
  async ({ effects }) =>
    sdk.Backups.ofVolumes('main').setOptions({
      exclude: networkDirs.flatMap((d) => [
        `/${d}`,
        `/.${d}.nocow`,
        `/.${d}.old`,
      ]),
    }),
)
