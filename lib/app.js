import { __decorate, __metadata, __param } from "tslib";
import { cli, container, env, inject, injectable, } from './container/index.js';
let app = class app {
    constructor(cli, env) {
        this.cli = cli;
        this.env = env;
    }
};
app = __decorate([
    injectable(),
    __param(0, inject(cli)),
    __param(1, inject(env)),
    __metadata("design:paramtypes", [cli,
        env])
], app);
export { app };
container.register('app', app);
//# sourceMappingURL=app.js.map