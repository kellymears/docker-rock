import { container, DependencyContainer } from 'tsyringe';
export interface factory {
    (container: DependencyContainer): DependencyContainer;
}
export { env } from './env.js';
export { cli } from './cli.js';
export { container };
