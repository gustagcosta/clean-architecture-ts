import type { SignInInput, SignInInteractor, SignInOutput } from '../../../application/interactors/sign-in.interactor';
import type { User } from '../../../entities/user';
import { HttpStatus } from '../../../shared/constants';
import { DataError } from '../../../shared/errors';
import type { HTTPRequest } from '../http-request';
import type { HTTPResponse } from '../http-response';
import { Controller } from './controller';
import type { SignInHttpMapper } from './mappers/sing-in.mapper';

interface HTTPSignInBody {
  email: string;
  password: string;
}

export type HTTPSignInInput = HTTPRequest<void, void, HTTPSignInBody, void>;

export class HTTPSignInController extends Controller {
  private interactor: SignInInteractor;
  private mapper: SignInHttpMapper;

  constructor(interactor: SignInInteractor, mapper: SignInHttpMapper) {
    super();
    this.interactor = interactor;
    this.mapper = mapper;
  }

  async run(input: HTTPSignInInput): Promise<HTTPResponse> {
    try {
      const interactorInput: SignInInput = this.mapper.RequestToInput(input);

      const response: SignInOutput = await this.interactor.execute(interactorInput);

      return { statusCode: HttpStatus.Ok, body: response };
    } catch (error) {
      return this.handleErrorResponse(error);
    }
  }
}
