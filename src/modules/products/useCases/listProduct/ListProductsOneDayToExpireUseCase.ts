import { inject, injectable } from "tsyringe";

import { Product } from "../../model/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
class ListProductsOneDayToExpireUseCase {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) {}

  async execute(): Promise<Product[]> {
    const products = await this.productsRepository.findByExpirationDate(1);
    return products;
  }
}

export { ListProductsOneDayToExpireUseCase };
