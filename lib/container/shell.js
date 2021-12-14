import { __decorate, __metadata, __param } from "tslib";
import { container, inject, injectable } from 'tsyringe';
import { execaCommand } from 'execa';
import { fs } from './fs.js';
let shell = class shell {
    constructor(fs) {
        this.fs = fs;
    }
    async $(app) {
        const child = execaCommand(app, {
            cwd: this.fs.projectPath(),
        });
        child.stdout?.pipe(process.stdout);
        child.stderr?.pipe(process.stderr);
        return await child;
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