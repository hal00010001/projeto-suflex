import { Router } from "express";
import multer from "multer";

import { CreateProductController } from "../modules/products/useCases/createProduct/CreateProductController";
import { ImportProductsController } from "../modules/products/useCases/importProducts/ImportProductsController";
import { ListProductsController } from "../modules/products/useCases/listProduct/ListProductsController";

const productsRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createProductController = new CreateProductController();
const importProductsController = new ImportProductsController();
const listProductsController = new ListProductsController();

productsRoutes.get("/", listProductsController.handle);

productsRoutes.post("/", createProductController.handle);

productsRoutes.post(
  "/import",
  upload.single("file"),
  importProductsController.handle
);

export { productsRoutes };
