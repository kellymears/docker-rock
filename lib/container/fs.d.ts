import { cli } from './cli.js';
export interface fs {
    cli: cli;
    readJson(path: string): Promise<Record<string, any>>;
    readFile(path: string): Promise<string>;
    writeFile(path: string, content: string): Promise<void>;
    writeJson(path: string, data: Record<string, any>): Promise<void>;
}
export declare class fs {
    cli: cli;
    constructor(cli: cli);
    projectPath(path?: string): string;
    stubPath(path?: string): string;
}
