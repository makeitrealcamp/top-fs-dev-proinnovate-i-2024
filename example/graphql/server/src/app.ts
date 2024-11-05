import express from 'express';
import cookie from 'cookie-parser';
import session from 'express-session';
import cors from 'cors';
import { createHandler } from 'graphql-http/lib/use/express';
import { ruruHTML } from 'ruru/server';



import { schema } from './graphql';


import { errorHandler } from './shared/errors/errorHandler';
import { AuthenticationError } from './shared/errors/AuthenticationError';

const app = express();

app.use(express.json());
app.use(cookie());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));


app.use(
  '/graphql',
  createHandler({
    schema,
  }),
);

app.get('/graphiql', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  return res.end(
    ruruHTML({
      endpoint: '/graphql',
    }),
  );
});

app.get('/error', (req, res, next) => {
  const error = new AuthenticationError(
    'You are not authorized to access this resource',
  );
  next(error);
});

app.use('*', (req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.use(errorHandler);

export default app;
