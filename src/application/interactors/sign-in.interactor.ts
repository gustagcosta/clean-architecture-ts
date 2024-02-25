import { NotFoundError, UnauthorizedError } from '../../shared/errors';
import type { SignInGateway } from '../gateways/sign-in-gateway';

export class SignInInteractor {
  constructor(private readonly gateway: SignInGateway) {}

  public async execute(input: SignInInput): Promise<SignInOutput> {
    const user = await this.gateway.getUserByEmail(input.email);

    if (!user?.id) {
      throw new NotFoundError('user not found');
    }

    const passwordMatch = await this.gateway.checkPassword(input.password, user.password);

    if (!passwordMatch) {
      throw new UnauthorizedError('invalid credetials');
    }

    return this.gateway.signIn(user.id);
  }
}

export type SignInInput = {
  email: string;
  password: string;
};

export type SignInOutput = {
  token: string;
  expiresIn: number;
};
