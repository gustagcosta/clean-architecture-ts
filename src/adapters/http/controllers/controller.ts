import { HttpStatus } from '../../../shared/constants';
import { ConflictError, DataError, NotFoundError, UnauthorizedError } from '../../../shared/errors';
import type { HTTPResponse } from '../http-response';

export abstract class Controller {
  public handleErrorResponse(error: any): HTTPResponse {
    const response = {
      statusCode: HttpStatus.InternalServerError,
      body: { message: error.message || 'internal server error' },
    };

    if (error instanceof ConflictError) {
      response.statusCode = HttpStatus.Conflict;
    }

    if (error instanceof UnauthorizedError) {
      response.statusCode = HttpStatus.Unauthorized;
    }

    if (error instanceof DataError) {
      response.statusCode = HttpStatus.BadRequest;
    }

    if (error instanceof NotFoundError) {
      response.statusCode = HttpStatus.NotFound;
    }

    return response;
  }
}
