import { Result } from 'meow';
import { DependencyContainer } from 'tsyringe';
export interface cli extends Result<{}> {
}
export declare const cli: cli;
export declare const make: (container: DependencyContainer) => DependencyContainer;
