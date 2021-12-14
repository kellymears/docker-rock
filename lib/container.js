import { container } from 'tsyringe';
import * as fs from 'fs-extra';
container.register('fs', { useValue: fs });
import * as env from './env.js';
env.make(container);
import * as cli from './cli.js';
cli.make(container);
export { env } from './env.js';
export { cli } from './cli.js';
export { container };
//# sourceMappingURL=container.js.map