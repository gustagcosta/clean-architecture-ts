import type { SignInOutput } from '../../application/interactors/sign-in.interactor';
import type { SignInService } from '../../application/services/sign-in.service';
import { sign } from 'jsonwebtoken';
import { TokenExpiresInTime } from '../../shared/constants';

export class JwtSignInService implements SignInService {
  public async signIn(userId: number): Promise<SignInOutput> {
    if (!process.env.SECRET_KEY) {
      throw new Error('secret key not found');
    }

    const token = sign({}, process.env.SECRET_KEY, {
      expiresIn: TokenExpiresInTime,
      subject: userId.toString(),
    });

    return { token, expiresIn: TokenExpiresInTime };
  }
}
