import { settingsJson } from '../fileModels/settings.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'

const { InputSpec, Value } = sdk

const inputSpec = InputSpec.of({
  carrier_policy: Value.toggle({
    name: i18n('Keep verified payment envelopes'),
    description: i18n(
      "Monetary Node's carrier policy: oversized OP_RETURN outputs that are exactly-parsed Shielded Bitcoin payment envelopes count as money, not spam. Turn off to use the ruleset of the Monetary Node project's published figures.",
    ),
    default: true,
  }),
})

export const spamRules = sdk.Action.withInput(
  'spam-rules',

  async () => ({
    name: i18n('Spam Rules'),
    description: i18n(
      'Options of the Monetary Node spam rules used for the analysis.',
    ),
    warning: i18n(
      'Changing a rule makes BitcoinMonetaryView delete its results and rescan the whole chain, which can take a day or more. Your Bitcoin node is not affected.',
    ),
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  }),

  inputSpec,

  async () => ({
    carrier_policy:
      (await settingsJson.read((s) => s.carrier_policy).once()) ?? true,
  }),

  async ({ effects, input }) => {
    await settingsJson.merge(effects, { carrier_policy: input.carrier_policy })
  },
)
