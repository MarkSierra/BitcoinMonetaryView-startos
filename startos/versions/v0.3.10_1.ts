import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'
import { networkDirs, noCow } from '../utils'

export const v_0_3_10_1 = VersionInfo.of({
  version: '0.3.10:1',
  releaseNotes: {
    en_US: `Scan results are stored without copy-on-write. The update rewrites existing scan results once, which can take several minutes for a large scan.`,
    de_DE: `Scan-Ergebnisse werden ohne Copy-on-Write gespeichert. Das Update schreibt vorhandene Scan-Ergebnisse einmalig neu, was bei einem großen Scan mehrere Minuten dauern kann.`,
    es_ES: `Los resultados del escaneo se guardan sin copia en escritura (copy-on-write). La actualización reescribe una vez los resultados existentes, lo que puede tardar varios minutos si el escaneo es grande.`,
    fr_FR: `Les résultats d'analyse sont stockés sans copie sur écriture (copy-on-write). La mise à jour réécrit une fois les résultats existants, ce qui peut prendre plusieurs minutes pour une analyse volumineuse.`,
    pl_PL: `Wyniki skanowania są zapisywane bez kopiowania przy zapisie (copy-on-write). Aktualizacja jednorazowo przepisuje istniejące wyniki, co przy dużym skanie może potrwać kilka minut.`,
  },
  migrations: {
    up: async ({ effects }) => {
      await noCow(effects, networkDirs)
    },
    down: IMPOSSIBLE,
  },
})
