import {container, inject, injectable} from 'tsyringe'

import * as fsx from 'fs-extra'
import {join, resolve} from 'path'
import {cli} from './cli'
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
    return await fsx.readJson(path)
  }

  public async writeJson(
    path: string,
    content: Record<string, any>,
  ): Promise<void> {
    fsx.writeJson(path, content)
  }

  public async readFile(path: string): Promise<string> {
    return await fsx.readFile(path, 'utf8')
  }

  public async writeFile(
    path: string,
    content: string,
  ): Promise<void> {
    fsx.writeFile(path, content, 'utf8')
  }

  @bind
  public async copyBedrockStub(path: string): Promise<void> {
    await fsx.copy(
      this.bedrockStub(path),
      this.projectPath(path),
    )
  }

  public bedrockStub(path?: string): string {
    return path
      ? `${resolve(`stub/bedrock/${path}`)}`
      : join(this.projectPath(path), 'stub')
  }

  @bind
  public projectPath(path?: string): string {
    return path ? join(this.target, path) : this.target
  }

  @bind
  public async projectFileExists(
    path: string,
  ): Promise<boolean> {
    return await fsx.pathExists(this.projectPath(path))
  }
}

container.register<fs>('fs', fs)
