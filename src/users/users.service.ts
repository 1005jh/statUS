import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/users.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  create(user: User) {
    this.users.push(user);
  }

  findAll() {
    return 'hi!';
  }
}
