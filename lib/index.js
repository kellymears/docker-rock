import 'reflect-metadata';
import './application.js';
import { container } from 'tsyringe';
(async () => {
    const app = container.resolve('application');
    await app.doBedrock();
})();
//# sourceMappingURL=index.js.map