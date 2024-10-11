import express from 'express';

import configExpress from './config/express';
import routes from './routes';

const app = express();

configExpress(app);
routes(app);

export default app;
