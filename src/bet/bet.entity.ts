import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('bet')
export class BetEntity {
  @PrimaryGeneratedColumn('uuid') id: string;

  @CreateDateColumn() created: Date;

  @Column('int') wager: number;

  @Column('int') line: number;

  @Column({ nullable: true }) won: boolean;
}
