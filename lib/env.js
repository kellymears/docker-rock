import dotenv from 'dotenv';
import { join } from 'path';
export const env = dotenv.config({
    path: join(process.cwd(), '.env'),
}).parsed;
export const make = container => {
    container.register('env', {
        useValue: env,
    });
    return container;
};
//# sourceMappingURL=env.js.map