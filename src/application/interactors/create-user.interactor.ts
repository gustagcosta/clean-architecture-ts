import type { User } from '../../entities/user';
import type { CreateUserGateway } from '../gateways/create-user.gateway';

export class CreateUserInteractor {
  constructor(private readonly gateway: CreateUserGateway) {}

  public async execute(input: CreateUserInput): Promise<void> {
    input.password = await this.gateway.cryptPassword(input.password);;
    await this.gateway.create(input);
  }
}

export type CreateUserInput = {
  name: string;
  email: string;
  password: string;
};
