import type { EncryptorService } from '../../application/services/encryptor.service';
import { hash } from 'bcryptjs';

export class BcryptEncryptorService implements EncryptorService {
  public async cryptPassword(password: string): Promise<string> {
    return hash(password, 8);
  }
}
