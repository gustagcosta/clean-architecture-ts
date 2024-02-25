import type { UserRepository } from '../../../application/repositories/user.repository';
import type { User } from '../../../entities/user';
import { ConflictError, NotFoundError } from '../../../shared/errors';

export class InMemoryUserRepository implements UserRepository {
  users: User[];

  constructor() {
    this.users = [];
  }

  public async getUserByEmail(email: string): Promise<User> {
    const existingUser = this.users.find((u) => u.email === email);

    if (!existingUser) {
      throw new NotFoundError('user already exists');
    }

    return existingUser;
  }

  public async create(user: User): Promise<void> {
    const id = this.users.length + 1;
    const existingUser = this.users.find((u) => u.email === user.email);

    if (existingUser) {
      throw new ConflictError('user already exists');
    }

    user.id = id;

    this.users.push(user);
  }
}
