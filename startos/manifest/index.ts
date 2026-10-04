import { setupManifest } from '@start9labs/start-sdk'
import { bitcoindDescription, long, short } from './i18n'

export const manifest = setupManifest({
  id: 'bitcoinmonetaryview',
  title: 'Monetary View',
  license: 'AGPL-3.0',
  packageRepo: 'https://github.com/MarkSierra/bitcoinmonetaryview-startos',
  upstreamRepo: 'https://github.com/MarkSierra/BitcoinMonetaryView',
  marketingUrl: 'https://github.com/MarkSierra/BitcoinMonetaryView',
  donationUrl: null,
  description: { short, long },
  volumes: ['main'],
  images: {
    bitcoinmonetaryview: {
      // Built from the upstream submodule (see Dockerfile and UPDATING.md).
      source: {
        dockerBuild: {
          dockerfile: 'Dockerfile',
          workdir: '.',
        },
      },
      arch: ['x86_64', 'aarch64'],
    },
  },
  dependencies: {
    bitcoind: {
      description: bitcoindDescription,
      optional: false,
      metadata: {
        title: 'Bitcoin',
        icon: 'https://raw.githubusercontent.com/Start9Labs/bitcoin-core-startos/refs/heads/30.x/dep-icon.svg',
      },
    },
  },
})
