import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BetModule } from './bet/bet.module';
import { BetController } from './bet/bet.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(), BetModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
