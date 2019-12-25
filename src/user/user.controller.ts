import {
  Controller,
  Post,
  Get,
  Body,
  UsePipes,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';
import { ValidationPipe } from '../shared/validation.pipe';
import { User } from './user.decorator';
import { AuthGuard } from 'src/shared/auth.guard';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/auth/login')
  @UsePipes(new ValidationPipe())
  login(@Body() data: UserDTO) {
    return this.userService.login(data);
  }

  @Post('/auth/register')
  @UsePipes(new ValidationPipe())
  register(@Body() data: UserDTO) {
    return this.userService.register(data);
  }

  @Get('api/users')
  fetchAll() {
    return this.userService.fetchAll();
  }
  @Get('api/me')
  @UseGuards(new AuthGuard())
  fetchProfile(@User('id') user) {
    return this.userService.fetchOne(user);
  }
}
