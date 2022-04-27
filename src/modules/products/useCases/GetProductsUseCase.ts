import { IProductsRepository } from "../repositories/IProductsRepository";

class GetProductsUseCase {
  constructor(private productsRepository: IProductsRepository) {}

  // execute({});
}

export { GetProductsUseCase };
