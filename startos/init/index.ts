import { sdk } from '../sdk'
import { dependencies } from '../dependencies'
import { setInterfaces } from '../interfaces'
import { versionGraph } from '../versions'
import { actions } from '../actions'
import { restoreInit } from '../backups'
import { noCowData } from './noCowData'
import { seedFiles } from './seedFiles'
import { watchCredentials } from './watchCredentials'

export const init = sdk.setupInit(
  restoreInit,
  versionGraph,
  noCowData,
  seedFiles,
  setInterfaces,
  actions,
  watchCredentials,
  dependencies,
)

export const uninit = sdk.setupUninit(versionGraph)
