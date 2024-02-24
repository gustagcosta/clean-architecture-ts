import type { CreateUserInput } from '../interactors/create-user.interactor';

export interface UserRepository {
  create(user: CreateUserInput): Promise<void>;
}
