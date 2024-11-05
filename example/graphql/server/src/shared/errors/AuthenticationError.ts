import { BaseError } from './BaseError';

export class AuthenticationError extends BaseError {
  constructor(message: string, name = 'AuthenticationError') {
    super(message, name, 401);
  }
}
