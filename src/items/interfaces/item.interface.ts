export interface Item {
  // id followed by ? because it's optional
  id?: string;
  name: string;
  description: string;
  qty: number;
}
