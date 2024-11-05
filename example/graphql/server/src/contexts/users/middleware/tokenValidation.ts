import { Request, Response, NextFunction } from 'express';
import { ApplicationError } from '../../../shared/errors/ApplicationError';
import jwt from 'jsonwebtoken';
import { errorType } from '../../../utils/constants';
import { JWT_SECRET } from '../../../config/config';

export const tokenValidation = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { authorization } = req.headers;

  if (!authorization) {
    const error = new ApplicationError(
      'Unauthorized',
      errorType.UNAUTHORIZED,
      401,
    );
    next(error);
  }

  const token = authorization?.split(' ')[1];
  console.log({ token });
  if (!token) {
    const error = new ApplicationError(
      'Unauthorized',
      errorType.UNAUTHORIZED,
      401,
    );
    next(error);
  }
  console.log({ JWT_SECRET });

  const decoded = token ? jwt.verify(token, `${JWT_SECRET}`) : null;
  console.log({ decoded });
  if (!decoded) {
    const error = new ApplicationError(
      'Unauthorized',
      errorType.UNAUTHORIZED,
      401,
    );
    next(error);
  }

  next();
};
