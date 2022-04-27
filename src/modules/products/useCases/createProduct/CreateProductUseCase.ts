import { IProductsRepository } from "../../repositories/IProductsRepository";

interface IRequest {
  name: string;
  expiration: number;
}

class CreateProductUseCase {
  constructor(private productsRepository: IProductsRepository) {}

  execute({ name, expiration }: IRequest): void {
    this.productsRepository.create({ name, expiration });
  }
}

export { CreateProductUseCase };
