import { Application } from 'express';

import noteRouter from './api/note';
// import userRouter from './api/user'

function routes(app: Application): void {
  app.use('/api/notes', noteRouter);
  // app.use('/api/users', userRouter);
}

export default routes;
