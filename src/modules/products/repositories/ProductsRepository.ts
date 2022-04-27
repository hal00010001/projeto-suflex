/* eslint-disable no-use-before-define */
import { getRepository, Repository } from "typeorm";

import { Product } from "../model/Product";
import { ICreateProductDTO } from "./ICreateProductDTO";
import { IProductsRepository } from "./IProductsRepository";

class ProductsRepository implements IProductsRepository {
  private repository: Repository<Product>;

  constructor() {
    this.repository = getRepository(Product);
  }

  async create({ name, expiration }: ICreateProductDTO): Promise<void> {
    const product = this.repository.create({ name, expiration });
    await this.repository.save(product);
  }

  async list(): Promise<Product[]> {
    const products = await this.repository.find();
    return products;
  }

  async findByExpirationDate(expiration_days: number): Promise<Product[]> {
    const products = await this.repository.find({
      where: {
        expiration: expiration_days,
      },
    });
    return products;
  }
}

export { ProductsRepository };
