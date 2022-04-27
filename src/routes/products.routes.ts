import { Router, Request, Response } from "express";

import { Product } from "../modules/products/model/Product";
import { ProductsRepository } from "../modules/products/repositories/ProductsRepository";

const productsRoutes = Router();
const productsRepository = new ProductsRepository();

const products: Product[] = [];

productsRoutes.get("/products", (request: Request, response: Response) => {
  const all = productsRepository.list();
  return response.json(all);
});

export { productsRoutes };
