import { utils } from '@start9labs/start-sdk'
import { settingsJson } from '../fileModels/settings.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'
import { webUser } from '../utils'

export const setWebPassword = sdk.Action.withoutInput(
  'set-web-password',

  async ({ effects }) => ({
    name: i18n('Set Web Password'),
    description: i18n(
      'Generate a new random password for the Monetary View web interface. A running service restarts so that only the new password works.',
    ),
    warning: (await settingsJson.read((s) => s.auth_password).const(effects))
      ? i18n(
          'This replaces the current password, and the old one stops working.',
        )
      : null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  }),

  async ({ effects }) => {
    const password = utils.getDefaultString({ charset: 'a-z,A-Z,0-9', len: 32 })
    await settingsJson.merge(effects, {
      auth_user: webUser,
      auth_password: password,
    })

    // The app reloads settings.json only between scan steps, which a node call can hold for minutes.
    if ((await effects.getStatus({}))?.started) {
      await effects.restart()
    }

    return {
      version: '1',
      title: i18n('Web Interface Credentials'),
      message: i18n('Use these to sign in to the Monetary View web interface.'),
      result: {
        type: 'group',
        value: [
          {
            type: 'single',
            name: i18n('Username'),
            description: null,
            value: webUser,
            masked: false,
            copyable: true,
            qr: false,
            launchable: false,
          },
          {
            type: 'single',
            name: i18n('Password'),
            description: null,
            value: password,
            masked: true,
            copyable: true,
            qr: false,
            launchable: false,
          },
        ],
      },
    }
  },
)
