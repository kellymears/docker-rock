import {application} from './application.js'
import {container} from './container/index.js'

/**
 * Runtime
 */
;async () => {
  const app = container.resolve<application>('application')
  Promise.all([app.copyCompose(), app.copyDockerDir()])
}
