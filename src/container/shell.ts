import {container, inject, injectable} from 'tsyringe'
import {ExecaChildProcess, execaCommand} from 'execa'
import {fs} from './fs.js'

export interface shell {
  (command: string): Promise<ExecaChildProcess>
}

@injectable()
export class shell {
  public constructor(@inject(fs) public fs: fs) {}

  public async $(command: string) {
    return await execaCommand(command, {
      cwd: this.fs.projectPath(),
    })
  }
}

container.register<shell>('execa', shell)
