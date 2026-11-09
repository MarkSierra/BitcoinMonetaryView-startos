import { sdk } from '../sdk'
import { noCow } from '../utils'

export const noCowData = sdk.setupOnInit(async (effects, kind) => {
  if (kind === 'install' || kind === 'restore') await noCow(effects)
})
