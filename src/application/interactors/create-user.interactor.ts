import type { User } from '../../entities/user';
import type { CreateUserGateway } from '../gateways/create-user.gateway';

export class CreateUserInteractor {
  constructor(private readonly gateway: CreateUserGateway) {}

  public async execute(user: User): Promise<void> {
    await this.gateway.create(user);
  }
}
