import { Router } from "express";
import multer from "multer";

import { createProductController } from "../modules/products/useCases/createProduct";
import { importProductsController } from "../modules/products/useCases/importProducts";
import { listProductsController } from "../modules/products/useCases/listProduct";

const productsRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

productsRoutes.get("/", (request, response) => {
  return listProductsController.handle(request, response);
});

productsRoutes.post("/", (request, response) => {
  return createProductController.handle(request, response);
});

productsRoutes.post("/import", upload.single("file"), (request, response) => {
  return importProductsController.handle(request, response);
});

export { productsRoutes };
