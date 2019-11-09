import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async login(data: UserDTO) {
    const { email, password } = data;
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user || !(await user.comparePassword(password))) {
      throw new HttpException(
        'Invalid username/password',
        HttpStatus.BAD_REQUEST,
      );
    }
    return user.toResponseObject();
  }
  async register(data: UserDTO) {
    const { email } = data;
    let user = await this.userRepository.findOne({ where: { email } });
    if (user) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    user = await this.userRepository.create(data);
    await this.userRepository.save(user);

    return user.toResponseObject();
  }

  async fetchAll() {
    const users = await this.userRepository.find();
    return users.map(user => user.toResponseObject(false));
  }
}
