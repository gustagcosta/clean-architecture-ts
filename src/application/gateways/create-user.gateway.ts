import type { User } from '../../entities/user';
import type { CreateUserInput } from '../interactors/create-user.interactor';
import type { UserRepository } from '../repositories/user.repository';

export class CreateUserGateway {
  constructor(private readonly userRepository: UserRepository) {}

  public async create(input: CreateUserInput): Promise<void> {
    return this.userRepository.create(input);
  }
}
