import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpException,
  HttpStatus,
  UsePipes,
  UseGuards,
} from '@nestjs/common';
import { BetService } from './bet.service';
import { BetDTO } from './bet.dto';
import { ValidationPipe } from '../shared/validation.pipe';
import { AuthGuard } from '../shared/auth.guard';
import { User } from '../user/user.decorator';

@Controller('api/bet')
export class BetController {
  constructor(private betService: BetService) {}

  @Get()
  findAll() {
    return this.betService.findAll();
  }

  @Post()
  @UseGuards(new AuthGuard())
  @UsePipes(new ValidationPipe())
  create(@User('id') user, @Body() data: BetDTO) {
    return this.betService.create(user, data);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const bet = this.betService.findOne(id);
    if (!bet) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return bet;
  }

  @Get('user/:id')
  findByUser(@Param('id') id: string) {
    return this.betService.findByUser(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<BetDTO>) {
    const bet = this.betService.findOne(id);
    if (!bet) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return this.betService.update(id, data);
  }

  @Delete(':id')
  destroy(@Param('id') id: string) {
    const bet = this.betService.findOne(id);
    if (!bet) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    this.betService.destroy(id);
    return bet;
  }
}
