import 'reflect-metadata'
import './application'

import {container} from 'tsyringe'
import {application} from './application'

/**
 * Runtime
 */
;(async () => {
  const app = container.resolve<application>('application')
  await app.doBedrock()
})()
