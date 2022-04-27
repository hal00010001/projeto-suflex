import { Product } from "../model/Product";

interface ICreateProductDTO {
  name: string;
  description: string;
}

class ProductsRepository {
  private products: Product[];

  constructor() {
    this.products = [];
  }

  list(): Product[] {
    return this.products;
  }
}

export { ProductsRepository };
