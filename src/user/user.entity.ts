import {
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  Column,
  BeforeInsert,
} from 'typeorm';

import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @Column({
    type: 'text',
    unique: true,
  })
  email: string;

  @Column('text')
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  toResponseObject(showToken: boolean = true) {
    const { id, email, created, token } = this;
    const responseObject = { id, email, created, token };
    if (showToken) {
      responseObject.token = this.token;
    }
    return responseObject;
  }

  async comparePassword(attempt: string): Promise<boolean> {
    return await bcrypt.compare(attempt, this.password);
  }

  private get token() {
    const { id, email } = this;
    return jwt.sign(
      {
        id,
        email,
      },
      process.env.SECRET,
    );
  }
}
