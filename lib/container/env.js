import dotenv from 'dotenv';
import { join } from 'path';
import { container } from 'tsyringe';
export class env {
    constructor() {
        this.obj = dotenv.config({
            path: join(process.cwd(), '.env'),
        }).parsed;
    }
}
container.register('env', env);
//# sourceMappingURL=env.js.map