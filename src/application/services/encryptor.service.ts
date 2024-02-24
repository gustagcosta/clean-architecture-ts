export interface EncryptorService {
  cryptPassword(password: string): Promise<string>;
}
