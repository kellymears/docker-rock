import 'reflect-metadata'
import './application.js'

import {container} from 'tsyringe'
import {application} from './application.js'

/**
 * Runtime
 */
;(async () => {
  const app = container.resolve<application>('application')
  await app.doBedrock()
})()
