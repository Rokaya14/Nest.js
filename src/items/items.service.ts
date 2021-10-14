import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

  //hard coded items
  //   private readonly items: Item[] = [
  //     {
  //       id: '856739750284',
  //       name: 'item one',
  //       qty: 100,
  //       description: 'this is the item 1 ',
  //     },
  //     {
  //       id: '9e6739750284',
  //       name: 'item two',
  //       qty: 50,
  //       description: 'this is the item 2 ',
  //     },
  //   ];

  //   findAll(): Item[] {
  //     return this.items;
  //   }
  //   findOne(id: string): Item {
  //     return this.items.find((item) => item.id === id);
  //   }

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }
  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id });
  }
  async create(item: Item): Promise<Item> {
    const newItem = new this.itemModel(item);
    return await newItem.save();
  }
  async delete(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndRemove(id);
  }
  async update(id: string, item: Item): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
}
