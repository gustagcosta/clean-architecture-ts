import type { User } from '../../entities/user';
import type { SignInOutput } from '../interactors/sign-in.interactor';
import type { UserRepository } from '../repositories/user.repository';
import type { EncryptorService } from '../services/encryptor.service';
import type { SignInService } from '../services/sign-in.service';

export class SignInGateway {
  constructor(
    private readonly signInService: SignInService,
    private readonly userRepository: UserRepository,
    private readonly encryptorService: EncryptorService
  ) {}

  public async signIn(id: number): Promise<SignInOutput> {
    return this.signInService.signIn(id);
  }

  public async checkPassword(password: string, hash: string): Promise<boolean> {
    return this.encryptorService.checkPassword(password, hash);
  }

  public async getUserByEmail(email: string): Promise<User> {
    return this.userRepository.getUserByEmail(email);
  }
}
