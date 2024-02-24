import type { User } from '../../entities/user';
import type { UserRepository } from '../repositories/user.repository';

export class CreateUserGateway {
  constructor(private readonly userRepository: UserRepository) {}

  public async create(user: User): Promise<void> {
    return this.userRepository.create(user);
  }
}
