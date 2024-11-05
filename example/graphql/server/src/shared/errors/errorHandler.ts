/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response, } from 'express';
import { BaseError } from './BaseError';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {

  if (err instanceof BaseError) {
     res.status(err.status).json({ error: err.message });
  }
if (err.name === 'PrismaClientInitializationError') {
    console.error({
      message: err.message,
      status: 400,
    });
      res.status(500).json({ error: 'Something went wrong' });
}

  res.status(500).json({ error: err.message });
};
