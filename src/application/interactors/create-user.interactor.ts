import type { User } from '../../entities/user';
import type { CreateUserGateway } from '../gateways/create-user.gateway';

export class CreateUserInteractor {
  constructor(private readonly gateway: CreateUserGateway) {}

  public async execute(input: CreateUserInput): Promise<void> {
    const cryptedPassword = await this.gateway.cryptPassword(input.password);
    input.password = cryptedPassword;
    await this.gateway.create(input);
  }
}

export type CreateUserInput = {
  name: string;
  email: string;
  password: string;
};
