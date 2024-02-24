import { ConflictError, DataError, NotFoundError, UnauthorizedError } from "../../../shared/errors";
import type HTTPResponse from "../http-response";

const HttpStatusConflict = 409;
const HttpStatusNotFound = 404;
const HttpStatusBadRequest = 400;
const HttpStatusUnauthorized = 401;
const HttpStatusInternalServerError = 500;

// deve dar pra fazer isso de uma forma mais bonitinha

export abstract class Controller {
  public handleErrorResponse(error: any): HTTPResponse {
    const response = {
      statusCode: HttpStatusInternalServerError,
      body: { message: error.message || 'internal server error' }
    };

    if (error instanceof ConflictError) {
      response.statusCode = HttpStatusConflict;
    }

    if (error instanceof UnauthorizedError) {
      response.statusCode = HttpStatusUnauthorized;
    }

    if (error instanceof DataError) {
      response.statusCode = HttpStatusBadRequest;
    }

    if (error instanceof NotFoundError) {
      response.statusCode = HttpStatusNotFound;
    }

    return response;
  }
}
