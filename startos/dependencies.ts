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
    '(>=28.4:42 && <29) || (>=29.5:4 && <30) || (>=30.4:4 && <31) || >=31.2:4 || >=#knotsprerdts:29.3:33 || >=#roots:29.4:1',
  kind: 'running',
  healthChecks: ['bitcoind', 'sync-progress'],
})

export const dependencies = sdk.Dependencies.of().addDependency(bitcoind)
