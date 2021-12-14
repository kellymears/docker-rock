import dotenv, { DotenvConfigOutput } from 'dotenv';
import { factory } from './container.js';
export declare type env = DotenvConfigOutput['parsed'];
export declare const env: dotenv.DotenvParseOutput | undefined;
export declare const make: factory;
