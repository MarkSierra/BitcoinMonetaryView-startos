import { VersionGraph } from '@start9labs/start-sdk'
import { current } from './current'
import { v_0_3_10_1 } from './v0.3.10_1'

export const versionGraph = VersionGraph.of({
  current,
  other: [v_0_3_10_1],
})
