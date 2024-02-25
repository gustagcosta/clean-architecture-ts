import type { SignInOutput } from "../interactors/sign-in.interactor";

export interface SignInService {
  signIn(userId: number): Promise<SignInOutput>;
}
