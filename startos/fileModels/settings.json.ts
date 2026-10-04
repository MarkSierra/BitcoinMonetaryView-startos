import { FileHelper, z } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

/**
 * The app's own settings file (/data/settings.json), written by the actions.
 *
 * Only the settings a StartOS user may change are modelled here; connection, binding and
 * managed mode are passed as environment variables in main.ts (they take precedence over
 * this file). The app itself is self-healing too: invalid values fall back to defaults.
 * Schema reference: https://github.com/MarkSierra/BitcoinMonetaryView/blob/main/docs/settings.md
 */
const shape = z.object({
  speed_profile: z.enum(['eco', 'balanced', 'full']).catch('eco'),
  scan_window: z
    .string()
    .regex(/^$|^([01]\d|2[0-3]):[0-5]\d-([01]\d|2[0-3]):[0-5]\d$/)
    .catch(''),
  timezone: z.string().min(1).catch('UTC'),
  carrier_policy: z.boolean().catch(true),
})

export type Settings = z.infer<typeof shape>

export const settingsJson = FileHelper.json(
  { base: sdk.volumes.main, subpath: '/settings.json' },
  shape,
)
