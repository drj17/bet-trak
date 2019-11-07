import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BetEntity } from './bet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BetDTO } from './bet.dto';

@Injectable()
export class BetService {
  constructor(
    @InjectRepository(BetEntity)
    private betRepository: Repository<BetEntity>,
  ) {}

  async findAll() {
    return await this.betRepository.find();
  }

  async create(data: BetDTO) {
    const bet = await this.betRepository.create(data);
    await this.betRepository.save(bet);
    return bet;
  }

  async findOne(id: string) {
    return await this.betRepository.findOne(id);
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
