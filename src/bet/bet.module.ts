import { Module } from '@nestjs/common';
import { BetController } from './bet.controller';
import { BetService } from './bet.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BetEntity } from './bet.entity';
import { UserEntity } from '../user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BetEntity, UserEntity])],
  controllers: [BetController],
  providers: [BetService],
})
export class BetModule {}
