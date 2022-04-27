import { Product } from "../model/Product";

interface IProductsRepository {
  list(): Product[];
  findByExpirationDate(days_to_expire: number): Product[];
}

export { IProductsRepository };
