import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { BetService } from './bet.service';
import { BetDTO } from './bet.dto';

@Controller('api/bet')
export class BetController {
  constructor(private betService: BetService) {}

  @Get()
  findAll() {
    return this.betService.findAll();
  }

  @Post()
  create(@Body() data: BetDTO) {
    return this.betService.create(data);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.betService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<BetDTO>) {
    return this.betService.update(id, data);
  }

  @Delete(':id')
  destroy(@Param('id') id: string) {
    return this.betService.destroy(id);
  }
}
