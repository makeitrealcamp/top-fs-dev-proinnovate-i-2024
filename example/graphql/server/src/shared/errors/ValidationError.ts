import { errorStatus, errorType } from '../../utils/constants';
import { BaseError } from './BaseError';

export class ValidationError extends BaseError {
  constructor(message: string) {
    super(
      message,
      errorType.BAD_REQUEST,
      errorStatus.BAD_REQUEST,
      'ValidationError',
    );
  }
}
