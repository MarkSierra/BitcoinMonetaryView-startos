import { rm } from 'fs/promises'
import { i18n } from '../i18n'
import { sdk } from '../sdk'
import { networkDirs } from '../utils'

export const rescan = sdk.Action.withoutInput(
  'rescan',

  async () => ({
    name: i18n('Rescan From Scratch'),
    description: i18n(
      "Delete BitcoinMonetaryView's own analysis results and scan the whole chain again on the next start. Settings are kept. Your Bitcoin node is not touched. Stop the service before running this action.",
    ),
    warning: i18n(
      'All analysis results are deleted. The full history scan starts again and can take a day or more.',
    ),
    // Only when stopped: deleting the database under a running scanner would race its writes.
    allowedStatuses: 'only-stopped',
    group: null,
    visibility: 'enabled',
  }),

  async () => {
    for (const dir of networkDirs) {
      await rm(sdk.volumes.main.subpath(dir), { recursive: true, force: true })
    }
    return {
      version: '1',
      title: i18n('Results Deleted'),
      message: i18n('Start BitcoinMonetaryView to begin a fresh scan.'),
      result: null,
    }
  },
)
