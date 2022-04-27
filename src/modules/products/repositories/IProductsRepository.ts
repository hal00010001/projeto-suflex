import { Product } from "../model/Product";
import { ICreateProductDTO } from "./ICreateProductDTO";

interface IProductsRepository {
  create({
    name: string,
    expiration: number,
  }: ICreateProductDTO): Promise<void>;
  list(): Promise<Product[]>;
  findByExpirationDate(days_to_expire: number): Promise<Product[]>;
}

export { IProductsRepository };
