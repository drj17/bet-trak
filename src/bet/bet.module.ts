import { Module } from '@nestjs/common';
import { BetController } from './bet.controller';
import { BetService } from './bet.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BetEntity } from './bet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BetEntity])],
  controllers: [BetController],
  providers: [BetService],
})
export class BetModule {}
