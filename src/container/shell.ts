import {container, inject, injectable} from 'tsyringe'
import execa, {ExecaChildProcess} from 'execa'
import {fs} from './fs'

export interface shell {
  (command: string): Promise<ExecaChildProcess>
}

@injectable()
export class shell {
  public constructor(@inject(fs) public fs: fs) {}

  public async $(app: string) {
    const child = execa.command(app, {
      cwd: this.fs.projectPath(),
    })
    child.stdout?.pipe(process.stdout)
    child.stderr?.pipe(process.stderr)
    return await child
  }
}

container.register<shell>('execa', shell)
