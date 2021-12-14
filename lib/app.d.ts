import { cli, env } from './container/index.js';
export interface app {
    cli: cli;
    env: env;
}
export declare class app {
    cli: cli;
    env: env;
    constructor(cli: cli, env: env);
}
