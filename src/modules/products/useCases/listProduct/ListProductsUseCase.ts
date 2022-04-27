import { Product } from "../../model/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";

class ListProductsUseCase {
  constructor(private productsRepository: IProductsRepository) {}

  execute(): Promise<Product[]> {
    const products = this.productsRepository.list();
    return products;
  }
}

export { ListProductsUseCase };
