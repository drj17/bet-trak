import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { UserEntity } from '../user/user.entity';

@Entity('bet')
export class BetEntity {
  @PrimaryGeneratedColumn('uuid') id: string;

  @CreateDateColumn() created: Date;

  @Column('int') wager: number;

  @Column('int') line: number;

  @Column({ nullable: true }) won: boolean;

  @ManyToOne(type => UserEntity, user => user.bets)
  user: UserEntity;
}
