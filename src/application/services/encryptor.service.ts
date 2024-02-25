export interface EncryptorService {
  checkPassword(password: string, hash: string): Promise<boolean>;
  cryptPassword(password: string): Promise<string>;
}
