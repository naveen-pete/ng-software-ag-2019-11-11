
export class ProductModel {
  id: number = Date.now();
  name: string;
  price: number;
  description: string;
  isAvailable: boolean = false;
}
