import type { User } from '../../entities/user';
import type { CreateUserInput } from '../interactors/create-user.interactor';
import type { UserRepository } from '../repositories/user.repository';
import type { EncryptorService } from '../services/encryptor.service';

export class CreateUserGateway {
  constructor(private readonly userRepository: UserRepository, private readonly encryptorService: EncryptorService) {}

  public async cryptPassword(password: string) {
    return this.encryptorService.cryptPassword(password);
  }

  public async create(input: CreateUserInput): Promise<void> {
    return this.userRepository.create(input);
  }
}
