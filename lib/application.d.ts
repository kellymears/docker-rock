import { cli, env, fs } from './container/index.js';
export interface application {
    targetDir: string;
    cli: cli;
    env: env;
    fs: fs;
}
export declare class application {
    cli: cli;
    env: env;
    targetDir: string;
    constructor(cli: cli, env: env);
    copyCompose(): Promise<void>;
}
