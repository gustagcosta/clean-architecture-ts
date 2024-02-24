import type { CreateUserInput } from '../../../../application/interactors/create-user.interactor';
import { DataError } from '../../../../shared/errors';
import type { HTTPCreateUserInput } from '../create-user.controller';

export class CreateUserHttpMapper {
  public RequestToInput(httpInput: HTTPCreateUserInput): CreateUserInput {
    if (!httpInput.body) {
      throw new DataError('invalid input. body not provided.');
    }

    const { name, email, password } = httpInput.body || {};

    if (typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
      throw new DataError('invalid input. Please provide valid name, email, and password.');
    }

    return {
      name: httpInput.body.name,
      email: httpInput.body.email,
      password: httpInput.body.password,
    };
  }
}
