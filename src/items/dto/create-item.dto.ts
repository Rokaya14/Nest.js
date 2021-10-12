export class CreateItemDto {
  // readonly from outside and cann't be changed
  readonly name: string;
  readonly description: string;
  readonly qty: number;
}
