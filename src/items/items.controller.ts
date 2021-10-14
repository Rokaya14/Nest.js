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
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';
@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  //   @Get()
  //   findAll(): Item[] {     // Item[] is the type return  from the function
  //     return this.itemService.findAll();
  //   }

  //   @Get(':id')
  //   findone(@Param('id') id): Item {
  //     return this.itemService.findOne(id);
  //   }
  @Get()
  findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }

  @Get(':id')
  findone(@Param('id') id): Promise<Item> {
    return this.itemService.findOne(id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemService.create(createItemDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Item> {
    return this.itemService.delete(id);
  }

  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): Promise<Item> {
    return this.itemService.update(id, updateItemDto);
  }
}
