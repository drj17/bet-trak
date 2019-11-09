import { Controller, Post, Get, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('login')
  login(@Body() data: UserDTO) {
    this.userService.login(data);
  }

  @Post('register')
  register(@Body() data: UserDTO) {
    this.userService.register(data);
  }

  @Get('api/users')
  fetchAll() {
    this.userService.fetchAll();
  }
}
