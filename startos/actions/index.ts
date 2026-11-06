import { sdk } from '../sdk'
import { rescan } from './rescan'
import { scanSettings } from './scanSettings'
import { setWebPassword } from './setWebPassword'
import { spamRules } from './spamRules'

export const actions = sdk.Actions.of()
  .addAction(setWebPassword)
  .addAction(scanSettings)
  .addAction(spamRules)
  .addAction(rescan)
