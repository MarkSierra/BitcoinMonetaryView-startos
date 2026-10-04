import { sdk } from '../sdk'
import { rescan } from './rescan'
import { scanSettings } from './scanSettings'
import { spamRules } from './spamRules'

export const actions = sdk.Actions.of()
  .addAction(scanSettings)
  .addAction(spamRules)
  .addAction(rescan)
