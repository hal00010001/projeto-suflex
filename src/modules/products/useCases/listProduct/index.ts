import { ProductsRepository } from "../../repositories/ProductsRepository";
import { ListProductsController } from "./ListProductsController";
import { ListProductsUseCase } from "./ListProductsUseCase";

const productsRepository = new ProductsRepository();
const listProductsUsecase = new ListProductsUseCase(productsRepository);
const listProductsController = new ListProductsController(listProductsUsecase);

export { listProductsController };
