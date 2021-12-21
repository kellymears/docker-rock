#!/usr/bin/env node

import { bind } from 'helpful-decorators'
import {
  cli,
  container,
  env,
  fs,
  inject,
  injectable,
} from './container'

export interface application {
  targetDir: string
  cli: cli
  env: env
  fs: fs
}

@injectable()
export class application {
  public constructor(
    @inject(env) public env: env,
    @inject(fs) public fs: fs,
  ) {}

  @bind
  public async doBedrock() {
    await Promise.all([
      this.fs.copyBedrockStub('docker-compose.yml'),
      this.fs.copyBedrockStub('docker'),
    ])

    if (!Object.entries(env).length) {
      await this.fs.copyBedrockStub('.env')
    }
  }
}

container.register<application>('application', application)
