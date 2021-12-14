import { DotenvConfigOutput } from 'dotenv';
export interface env {
    obj: DotenvConfigOutput['parsed'];
}
export declare class env {
    constructor();
}
