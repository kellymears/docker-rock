import { __decorate, __metadata, __param } from "tslib";
import { bind } from 'helpful-decorators';
import { cli, container, env, inject, injectable, } from './container/index.js';
let application = class application {
    constructor(cli, env) {
        this.cli = cli;
        this.env = env;
        this.targetDir = process.cwd();
        const targetInput = this.cli.input.pop();
        if (typeof targetInput === 'string')
            this.targetDir = this.fs.projectPath(targetInput);
    }
    async copyCompose() {
        const composeFile = await this.fs.readFile(this.fs.stubPath('docker-compose.yml'));
        await this.fs.writeFile(this.fs.projectPath('docker-compose.yml'), composeFile);
    }
};
__decorate([
    bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], application.prototype, "copyCompose", null);
application = __decorate([
    injectable(),
    __param(0, inject(cli)),
    __param(1, inject(env)),
    __metadata("design:paramtypes", [cli,
        env])
], application);
export { application };
container.register('application', application);
//# sourceMappingURL=application.js.map