import { __decorate, __metadata } from "tslib";
import meow from 'meow';
import * as messages from '../message/index.js';
import { container, injectable } from 'tsyringe';
let cli = class cli {
    constructor() {
        Object.assign(this, meow(messages.header, {
            importMeta: import.meta,
        }));
    }
};
cli = __decorate([
    injectable(),
    __metadata("design:paramtypes", [])
], cli);
export { cli };
container.register('cli', cli);
//# sourceMappingURL=cli.js.map