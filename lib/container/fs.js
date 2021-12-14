import { __decorate, __metadata, __param } from "tslib";
import { container, inject, injectable } from 'tsyringe';
import { readJson, readFile, writeFile, writeJson } from 'fs-extra';
import { relative } from 'path';
import { cli } from './cli.js';
let fs = class fs {
    constructor(cli) {
        this.cli = cli;
    }
    async readJson(path) {
        return await readJson(path);
    }
    async writeJson(path, content) {
        writeJson(path, content);
    }
    async readFile(path) {
        return await readFile(path, 'utf8');
    }
    async writeFile(path, content) {
        writeFile(path, content, 'utf8');
    }
    projectPath(path) {
        return path ? relative(process.cwd(), path) : process.cwd();
    }
    stubPath(path) {
        return path ? relative(__dirname, path) : process.cwd();
    }
};
fs = __decorate([
    injectable(),
    __param(0, inject(cli)),
    __metadata("design:paramtypes", [cli])
], fs);
export { fs };
container.register('fs', fs);
//# sourceMappingURL=fs.js.map