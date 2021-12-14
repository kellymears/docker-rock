import { container } from './container/index.js';
(async () => {
    const app = container.resolve('application');
    Promise.all([app.copyCompose(), app.copyDockerDir()]);
})();
//# sourceMappingURL=boot.js.map