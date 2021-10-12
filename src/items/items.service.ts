import { Injectable } from '@nestjs/common';
import { item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  //hard coded items
  private readonly items: item[] = [
    {
      id: '856739750284',
      name: 'item one',
      qty: 100,
      description: 'this is the item 1 ',
    },
    {
      id: '9e6739750284',
      name: 'item two',
      qty: 50,
      description: 'this is the item 2 ',
    },
  ];

  findAll(): item[] {
    return this.items;
  }
  findOne(id: string): item {
    return this.items.find((item) => item.id === id);
  }
}
