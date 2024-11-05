import { BaseError } from './BaseError';

export class ApplicationError extends BaseError {
  constructor(
    message: string,
    errorType: string,
    status = 500,
    name = 'ApplicationError',
  ) {
    super(message, errorType, status, name);
  }
}
