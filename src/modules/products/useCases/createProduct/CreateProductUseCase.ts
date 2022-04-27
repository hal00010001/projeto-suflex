import { inject, injectable } from "tsyringe";

import { IProductsRepository } from "../../repositories/IProductsRepository";

interface IRequest {
  name: string;
  expiration: number;
}

@injectable()
class CreateProductUseCase {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) {}

  async execute({ name, expiration }: IRequest): Promise<void> {
    await this.productsRepository.create({ name, expiration });
  }
}

export { CreateProductUseCase };
