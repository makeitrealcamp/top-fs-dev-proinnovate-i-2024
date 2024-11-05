export class BaseError extends Error {
  status: number;
  errorType: string;
  constructor(
    message: string,
    errorType: string,
    status: number,
    name = 'BaseError',
  ) {
    super(message);
    this.status = status;
    this.name = name;
    this.errorType = errorType;
    Error.captureStackTrace(this, this.constructor);
  }
}
