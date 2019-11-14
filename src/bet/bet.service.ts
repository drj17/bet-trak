import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BetEntity } from './bet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BetDTO } from './bet.dto';
import { UserEntity } from '../user/user.entity';

@Injectable()
export class BetService {
  constructor(
    @InjectRepository(BetEntity)
    private betRepository: Repository<BetEntity>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async findAll() {
    return await this.betRepository.find();
  }

  async create(userId: string, data: BetDTO) {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    const bet = await this.betRepository.create({ ...data, user });
    await this.betRepository.save(bet);
    return bet;
  }

  async findOne(id: string) {
    return await this.betRepository.findOne(id);
  }

  async findByUser(id: string) {
    return await this.betRepository.find({ where: { user: { id } } });
  }

  async update(id: string, data: Partial<BetDTO>) {
    await this.betRepository.update(id, data);
    return this.betRepository.findOne(id);
  }

  async destroy(id: string) {
    await this.betRepository.delete(id);
    return { deleted: true };
  }
}
