import { NextFunction, Request, Response } from 'express';

type AsyncFunction = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<void>;

export const asyncHandler =
  (fn: AsyncFunction) => (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(fn(req, res, next)).catch(next);
  };

//HOF

/*
a higher-order function is a function that takes a function as an argument or returns a function as a result.

*/
