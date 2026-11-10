import { settingsJson } from '../fileModels/settings.json'
import { sdk } from '../sdk'
import { setAsideDamagedSettings } from './settingsGuard'

export const seedFiles = sdk.setupOnInit(async (effects) => {
  // An unreadable file goes aside; the defaults written below bring back the web password task.
  if (
    await setAsideDamagedSettings(sdk.volumes.main.subpath('/settings.json'))
  ) {
    console.warn(
      'settings.json could not be read; kept as settings.json.damaged, defaults written',
    )
  }
  await settingsJson.merge(effects, {})
})
