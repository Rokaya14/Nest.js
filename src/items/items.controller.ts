import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'get all items';
  }

  @Get(':id')
  findone(@Param('id') id): string {
    return `item is ${id}`;
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    const { name, description, qty } = createItemDto;
    return `Name is  ${name}, Desc is ${description}, qty is ${qty}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete item that id is ${id}`;
  }

  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
    return `update item that id is ${id} - Name is ${updateItemDto.name} `;
  }
}
