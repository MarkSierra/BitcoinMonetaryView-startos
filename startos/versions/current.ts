import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.2.3:1',
  releaseNotes: {
    en_US:
      'Now also available for RISC-V (riscv64) servers. Nothing changes on x86_64 and ARM.',
    de_DE:
      'Jetzt auch für RISC-V-Server (riscv64) verfügbar. Auf x86_64 und ARM ändert sich nichts.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
