import type { CreateUserInput, CreateUserInteractor } from '../../../application/interactors/create-user.interactor';
import type { User } from '../../../entities/user';
import { HttpStatus } from '../../../shared/constants';
import { DataError } from '../../../shared/errors';
import type { HTTPRequest } from '../http-request';
import type { HTTPResponse } from '../http-response';
import { Controller } from './controller';
import type { CreateUserHttpMapper } from './mappers/create-user.mapper';

interface HTTPCreateUserBody {
  name: string;
  email: string;
  password: string;
}

export type HTTPCreateUserInput = HTTPRequest<void, void, HTTPCreateUserBody, void>;

export class HTTPCreateUserController extends Controller {
  private interactor: CreateUserInteractor;
  private mapper: CreateUserHttpMapper;

  constructor(interactor: CreateUserInteractor, mapper: CreateUserHttpMapper) {
    super();
    this.interactor = interactor;
    this.mapper = mapper;
  }

  async run(input: HTTPCreateUserInput): Promise<HTTPResponse> {
    try {
      const interactorInput: CreateUserInput = this.mapper.RequestToInput(input);

      await this.interactor.execute(interactorInput);

      return { statusCode: HttpStatus.Created };
    } catch (error) {
      return this.handleErrorResponse(error);
    }
  }
}
