export class CreateItemDto {
  // readonly from outside and cann't be changed
  readonly name: string;
  readonly descripton: string;
  readonly qty: number;
}
