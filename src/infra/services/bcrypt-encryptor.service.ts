import type { EncryptorService } from '../../application/services/encryptor.service';
import { compare, hash } from 'bcryptjs';

export class BcryptEncryptorService implements EncryptorService {
  public async cryptPassword(password: string): Promise<string> {
    return hash(password, 8);
  }

  public async checkPassword(password: string, hash: string): Promise<boolean> {
    return compare(password, hash);
  }
}
