import { sdk } from './sdk'

export const setDependencies = sdk.setupDependencies(async ({ effects }) => ({
  bitcoind: {
    kind: 'running',
    // Same range the official Mempool package accepts (Bitcoin Core or Knots).
    versionRange:
      '(>=28.4:17 && <29) || (>=29.4:4 && <30) || (>=30.3:4 && <31) || >=31.1:4',
    healthChecks: ['bitcoind', 'sync-progress'],
  },
}))
