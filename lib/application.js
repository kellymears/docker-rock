import { __decorate, __metadata, __param } from "tslib";
import { bind } from 'helpful-decorators';
import { container, env, fs, inject, injectable, } from './container/index.js';
let application = class application {
    constructor(env, fs) {
        this.env = env;
        this.fs = fs;
    }
    async doBedrock() {
        await Promise.all([
            this.fs.copyBedrockStub('docker-compose.yml'),
            this.fs.copyBedrockStub('docker'),
        ]);
        if (!Object.entries(env).length) {
            await this.fs.copyBedrockStub('.env');
        }
    }
};
__decorate([
    bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], application.prototype, "doBedrock", null);
application = __decorate([
    injectable(),
    __param(0, inject(env)),
    __param(1, inject(fs)),
    __metadata("design:paramtypes", [env,
        fs])
], application);
export { application };
container.register('application', application);
//# sourceMappingURL=application.js.map