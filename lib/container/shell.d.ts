import { ExecaChildProcess } from 'execa';
import { fs } from './fs.js';
export interface shell {
    (command: string): Promise<ExecaChildProcess>;
}
export declare class shell {
    fs: fs;
    constructor(fs: fs);
    $(command: string): Promise<import("execa").ExecaReturnValue<string>>;
}
