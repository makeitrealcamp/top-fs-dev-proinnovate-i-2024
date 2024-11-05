import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';

import { ValidationError } from '../errors/ValidationError';

const uuidSchema = z.string().uuid();

export const paramValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;

  if (!id) {
    return next(new ValidationError('id is required'));
  }

  if (!uuidSchema.safeParse(id).success) {
    return next(new ValidationError('invalid id'));
  }
  next();
};
