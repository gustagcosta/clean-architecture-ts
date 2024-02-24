// 401 unauthorized error
// 400 data error
// 404 not found error
// 409 conflict error
// 500 internal server error

export class ConflictError extends Error {
  constructor(message: string) {
    super();
    this.message = message;
    this.name = 'ConflictError';
  }
}

export class UnauthorizedError extends Error {
  constructor(message: string) {
    super();
    this.message = message;
    this.name = 'UnauthorizedError';
  }
}

export class DataError extends Error {
  constructor(message: string) {
    super();
    this.message = message;
    this.name = 'DataError';
  }
}

export class NotFoundError extends Error {
  constructor(message: string) {
    super();
    this.message = message;
    this.name = 'NotFoundError';
  }
}
