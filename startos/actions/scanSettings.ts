import { settingsJson } from '../fileModels/settings.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'

const { InputSpec, Value } = sdk

const inputSpec = InputSpec.of({
  speed_profile: Value.select({
    name: i18n('Scan Speed'),
    description: i18n(
      'How hard the history scan may work your node. Eco (recommended): one block at a time with pauses, one CPU core. Balanced: two parallel requests, two cores. Full speed: four parallel requests, up to four cores. In every profile the scan backs off automatically when Bitcoin answers slowly and waits while Bitcoin is syncing.',
    ),
    default: 'eco',
    values: {
      eco: i18n('Eco (recommended)'),
      balanced: i18n('Balanced'),
      full: i18n('Full speed'),
    },
  }),
  scan_window: Value.text({
    name: i18n('Scan Window'),
    description: i18n(
      'Optional: only scan history during these hours each day, e.g. 01:00-07:00. Leave empty to scan around the clock. New blocks are always analysed.',
    ),
    required: false,
    default: null,
    placeholder: '01:00-07:00',
    patterns: [
      {
        regex: '^([01]\\d|2[0-3]):[0-5]\\d-([01]\\d|2[0-3]):[0-5]\\d$',
        description: i18n('Use 24-hour times like 01:00-07:00'),
      },
    ],
  }),
  timezone: Value.text({
    name: i18n('Time Zone'),
    description: i18n(
      'Time zone for the scan window, as an IANA name such as Europe/Berlin or America/New_York.',
    ),
    required: true,
    default: 'UTC',
    patterns: [
      {
        regex: '^[A-Za-z_]+(/[A-Za-z0-9_+\\-]+)*$',
        description: i18n('Use an IANA time zone name such as Europe/Berlin'),
      },
    ],
  }),
})

export const scanSettings = sdk.Action.withInput(
  'scan-settings',

  async () => ({
    name: i18n('Scan Settings'),
    description: i18n(
      'Choose how fast the history scan runs and, optionally, the hours it may run in. Changes take effect within seconds; no restart needed.',
    ),
    warning: null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  }),

  inputSpec,

  async () => {
    const s = await settingsJson.read().once()
    return {
      speed_profile: s?.speed_profile ?? 'eco',
      scan_window: s?.scan_window || null,
      timezone: s?.timezone ?? 'UTC',
    }
  },

  async ({ effects, input }) => {
    await settingsJson.merge(effects, {
      speed_profile: input.speed_profile,
      scan_window: input.scan_window ?? '',
      timezone: input.timezone,
    })
  },
)
