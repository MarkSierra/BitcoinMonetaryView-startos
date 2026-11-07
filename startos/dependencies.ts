import { bitcoindDescription } from './manifest/i18n'
import { sdk } from './sdk'

// Bitcoin Core, Knots or Roots. Read-only use: the app never asks the node to change its config.
const bitcoind = sdk.Dependency.required('bitcoind', {
  description: bitcoindDescription,
  metadata: {
    title: 'Bitcoin',
    icon: 'https://raw.githubusercontent.com/Start9Labs/bitcoin-core-startos/refs/heads/30.x/dep-icon.svg',
  },
  // Core, the pre-RDTS Knots flavor and the Roots flavor.
  versionRange:
    '(>=28.4:17 && <29) || (>=29.4:4 && <30) || (>=30.3:4 && <31) || >=31.1:4 || >=#knotsprerdts:29.3:29 || >=#roots:29.4:0',
  kind: 'running',
  healthChecks: ['bitcoind', 'sync-progress'],
})

export const dependencies = sdk.Dependencies.of().addDependency(bitcoind)
