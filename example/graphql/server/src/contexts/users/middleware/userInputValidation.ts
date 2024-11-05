import { Request, Response, NextFunction } from 'express';
import { userInputSchema } from '../validators';
import { ApplicationError } from '../../../shared/errors/ApplicationError';
import { errorStatus, errorType } from '../../../utils/constants';

export const validateUserInput = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    userInputSchema.parse(req.body);
    next();
  } catch (error) {
    const validationError = new ApplicationError(
      'Name and email are required',
      errorType.BAD_REQUEST,
      errorStatus.BAD_REQUEST,
    );
    next(validationError);
  }
};
