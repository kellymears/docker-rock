import meow, {Result} from 'meow'
import * as messages from '../message/index'
import {container, injectable} from 'tsyringe'

export interface cli extends Result<{}> {}

@injectable()
export class cli {
  public constructor() {
    Object.assign(
      this,
      meow(messages.header)
    )
  }
}

container.register<cli>('cli', cli)
