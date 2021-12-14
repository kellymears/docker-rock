import {container, inject, injectable} from 'tsyringe'

import {
  readJson,
  readFile,
  writeFile,
  writeJson,
  copy,
} from 'fs-extra'
import {resolve} from 'path'
import {cli} from './cli.js'
import {bind} from 'helpful-decorators'

export interface fs {
  cli: cli
  copyStub(path: string): Promise<void>
  readJson(path: string): Promise<Record<string, any>>
  readFile(path: string): Promise<string>
  writeFile(path: string, content: string): Promise<void>
  writeJson(
    path: string,
    data: Record<string, any>,
  ): Promise<void>
}

@injectable()
export class fs {
  public target: string = process.cwd()

  public constructor(@inject(cli) public cli: cli) {
    const input = this.cli.input.pop()

    if (typeof input === 'string')
      this.target = this.projectPath(input)
  }

  public async readJson(
    path: string,
  ): Promise<Record<string, any>> {
    return await readJson(path)
  }

  public async writeJson(
    path: string,
    content: Record<string, any>,
  ): Promise<void> {
    writeJson(path, content)
  }

  public async readFile(path: string): Promise<string> {
    return await readFile(path, 'utf8')
  }

  public async writeFile(
    path: string,
    content: string,
  ): Promise<void> {
    writeFile(path, content, 'utf8')
  }

  @bind
  public async copyStub(path: string): Promise<void> {
    await copy(this.stubPath(path), this.projectPath(path))
  }

  public projectPath(path?: string): string {
    return path ? resolve(process.cwd(), path) : process.cwd()
  }

  public stubPath(path?: string): string {
    return path
      ? resolve(__dirname, '..', 'stub', path)
      : process.cwd()
  }
}

container.register<fs>('fs', fs)
