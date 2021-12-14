import { __decorate, __metadata, __param } from "tslib";
import { container, inject, injectable } from 'tsyringe';
import { execaCommand } from 'execa';
import { fs } from './fs.js';
let shell = class shell {
    constructor(fs) {
        this.fs = fs;
    }
    async $(command) {
        return await execaCommand(command, {
            cwd: this.fs.projectPath(),
        });
    }
};
shell = __decorate([
    injectable(),
    __param(0, inject(fs)),
    __metadata("design:paramtypes", [fs])
], shell);
export { shell };
container.register('execa', shell);
//# sourceMappingURL=shell.js.map