import type { User } from '../../entities/user';
import type { CreateUserInput } from '../interactors/create-user.interactor';

export interface UserRepository {
  create(user: CreateUserInput): Promise<void>;
  getUserByEmail(email: string): Promise<User>;
}
