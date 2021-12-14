import { __decorate, __metadata, __param } from "tslib";
import { container, inject, injectable } from 'tsyringe';
import * as fsx from 'fs-extra';
import { join, resolve } from 'path';
import { cli } from './cli.js';
import { bind } from 'helpful-decorators';
let fs = class fs {
    constructor(cli) {
        this.cli = cli;
        this.target = process.cwd();
        const input = this.cli.input.pop();
        if (typeof input === 'string')
            this.target = this.projectPath(input);
    }
    async readJson(path) {
        return await fsx.readJson(path);
    }
    async writeJson(path, content) {
        fsx.writeJson(path, content);
    }
    async readFile(path) {
        return await fsx.readFile(path, 'utf8');
    }
    async writeFile(path, content) {
        fsx.writeFile(path, content, 'utf8');
    }
    async copyBedrockStub(path) {
        await fsx.copy(this.bedrockStub(path), this.projectPath(path));
    }
    bedrockStub(path) {
        return path
            ? `${resolve(`stub/bedrock/${path}`)}`
            : join(import.meta.url, 'stub');
    }
    projectPath(path) {
        return path ? join(this.target, path) : this.target;
    }
    async projectFileExists(path) {
        return await fsx.pathExists(this.projectPath(path));
    }
};
__decorate([
    bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], fs.prototype, "copyBedrockStub", null);
__decorate([
    bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], fs.prototype, "projectPath", null);
__decorate([
    bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], fs.prototype, "projectFileExists", null);
fs = __decorate([
    injectable(),
    __param(0, inject(cli)),
    __metadata("design:paramtypes", [cli])
], fs);
export { fs };
container.register('fs', fs);
//# sourceMappingURL=fs.js.map