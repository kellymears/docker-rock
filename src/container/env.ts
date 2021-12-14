import dotenv, {DotenvConfigOutput} from 'dotenv'
import {join} from 'path'
import {container} from 'tsyringe'

export interface env {
  obj: DotenvConfigOutput['parsed']
}

export class env {
  public constructor() {
    this.obj = dotenv.config({
      path: join(process.cwd(), '.env'),
    }).parsed
  }
}

container.register<env>('env', env)
