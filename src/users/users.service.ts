import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  findByEmail(email: string): Promise<User> {
    return this.usersRepository.findOneBy({ email });
  }

  /*  create(user: User): Promise<User> {
    return this.usersRepository.save(user);
  } */

  async create(user: Partial<User>): Promise<User> {
  /*   const newUser = new User();
    newUser.name = user.name;
    newUser.email = user.email;
    newUser.password = user.password;
    // Save newUser to the database
    return newUser; */

    const newUser = this.usersRepository.create(user);
    return this.usersRepository.save(newUser);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
