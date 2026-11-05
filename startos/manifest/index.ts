import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'bitcoinmonetaryview',
  title: 'Monetary View',
  license: 'AGPL-3.0-or-later',
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
      arch: ['x86_64', 'aarch64', 'riscv64'],
    },
  },
})
