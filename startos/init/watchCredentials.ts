import { setWebPassword } from '../actions/setWebPassword'
import { settingsJson } from '../fileModels/settings.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'

export const watchCredentials = sdk.setupOnInit(async (effects) => {
  if (!(await settingsJson.read((s) => s.auth_password).const(effects))) {
    await sdk.action.createOwnTask(effects, setWebPassword, 'critical', {
      reason: i18n('Set a password for the web interface'),
    })
  }
})
