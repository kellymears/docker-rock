import {bind} from 'helpful-decorators'
import {
  cli,
  container,
  env,
  fs,
  inject,
  injectable,
} from './container/index.js'

export interface application {
  targetDir: string
  cli: cli
  env: env
  fs: fs
}

@injectable()
export class application {
  public targetDir: string = process.cwd()

  public constructor(
    @inject(cli) public cli: cli,
    @inject(env) public env: env,
  ) {}

  @bind
  public async copyCompose() {
    await this.fs.copyStub('docker-compose.yml')
  }

  @bind
  public async copyDockerDir() {
    await this.fs.copyStub('docker')
  }
}

container.register<application>('application', application)
