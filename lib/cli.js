import meow from 'meow';
import * as messages from './messages/index.js';
export const cli = meow(messages.header, {
    importMeta: import.meta,
});
export const make = (container) => {
    container.register('cli', {
        useValue: cli,
    });
    return container;
};
//# sourceMappingURL=cli.js.map