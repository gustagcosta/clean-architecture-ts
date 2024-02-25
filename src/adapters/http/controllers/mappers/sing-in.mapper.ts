import type { SignInInput } from '../../../../application/interactors/sign-in.interactor';
import { DataError } from '../../../../shared/errors';
import type { HTTPSignInInput } from '../sign-in.controller';

export class SignInHttpMapper {
  public RequestToInput(httpInput: HTTPSignInInput): SignInInput {
    if (!httpInput.body) {
      throw new DataError('invalid input. body not provided.');
    }

    const { email, password } = httpInput.body || {};

    if (typeof email !== 'string' || typeof password !== 'string') {
      throw new DataError('invalid input. Please provide valid name, email, and password.');
    }

    return {
      email: httpInput.body.email,
      password: httpInput.body.password,
    };
  }
}
