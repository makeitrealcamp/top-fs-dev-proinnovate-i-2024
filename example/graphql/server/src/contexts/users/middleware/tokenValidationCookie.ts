import { Request, Response, NextFunction } from 'express';
import { ApplicationError } from '../../../shared/errors/ApplicationError';
import jwt from 'jsonwebtoken';
import { errorType } from '../../../utils/constants';
import { JWT_SECRET } from '../../../config/config';

export const tokenValidationCookie = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { token } = req.cookies;

  console.log(req.cookies);

  // const token = authorization?.split(' ')[1];

  if (!token) {
    const error = new ApplicationError(
      'Unauthorized',
      errorType.UNAUTHORIZED,
      401,
    );
    next(error);
  }

  const decoded = token ? jwt.verify(token, `${JWT_SECRET}`) : null;

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
