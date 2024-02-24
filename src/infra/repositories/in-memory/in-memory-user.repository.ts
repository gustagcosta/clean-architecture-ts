import type { UserRepository } from '../../../application/repositories/user.repository';
import type { User } from '../../../entities/user';
import { ConflictError } from '../../../shared/errors';

export class InMemoryUserRepository implements UserRepository {
  users: User[];

  constructor() {
    this.users = [];
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
