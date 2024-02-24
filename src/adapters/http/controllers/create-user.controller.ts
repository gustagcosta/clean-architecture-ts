import type { CreateUserInteractor } from '../../../application/interactors/create-user.interactor';
import type { User } from '../../../entities/user';
import { DataError } from '../../../shared/errors';
import type HTTPRequest from '../http-request';
import type HTTPResponse from '../http-response';
import { Controller } from './controller';

interface HTTPCreateUserBody {
  name: string;
  email: string;
  password: string;
}

type HTTPCreateUserInput = HTTPRequest<void, void, HTTPCreateUserBody, void>;

export class HTTPCreateUserController extends Controller {
  private interactor: CreateUserInteractor;

  constructor(interactor: CreateUserInteractor) {
    super();
    this.interactor = interactor;
  }

  async run(input: HTTPCreateUserInput): Promise<HTTPResponse> {
    try {
      const user: User = this.validate(input);

      await this.interactor.execute(user);

      return { statusCode: 201 };
    } catch (error) {
      return this.handleErrorResponse(error);
    }
  }

  private validate(input: HTTPCreateUserInput): User {
    // talvez isso aqui seria um mapper

    const { name, email, password } = input.body || {};

    if (typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
      throw new DataError('invalid input. Please provide valid name, email, and password.');
    }

    return { name, email, password };
  }
}
