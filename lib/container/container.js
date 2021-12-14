import { container } from 'tsyringe';
import { readJson, readFile } from 'fs-extra';
const fs = {
    readJson,
    readFile,
};
container.register('fs', { useValue: fs });
//# sourceMappingURL=container.js.map