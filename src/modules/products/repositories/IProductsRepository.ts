import { Product } from "../model/Product";
import { ICreateProductDTO } from "./ICreateProductDTO";

interface IProductsRepository {
  create({ name, expiration }: ICreateProductDTO): Promise<void>;
  list(): Promise<Product[]>;
  findByExpirationDate(days_to_expire: number): Promise<Product[]>;
}

export { IProductsRepository };
