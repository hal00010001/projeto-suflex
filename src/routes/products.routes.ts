import { Router } from "express";
import multer from "multer";

import { CreateProductController } from "../modules/products/useCases/createProduct/CreateProductController";
import { ImportProductsController } from "../modules/products/useCases/importProducts/ImportProductsController";
import { ListProductsController } from "../modules/products/useCases/listProduct/ListProductsController";
import { ListProductsOneDayToExpireController } from "../modules/products/useCases/listProduct/ListProductsOneDayToExpireController";
import { ListProductsZeroDayToExpireController } from "../modules/products/useCases/listProduct/ListProductsZeroDayToExpireController";

const productsRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createProductController = new CreateProductController();
const importProductsController = new ImportProductsController();
const listProductsController = new ListProductsController();
const listProductsOneDayToExpireController =
  new ListProductsOneDayToExpireController();
const listProductsZeroDayToExpireController =
  new ListProductsZeroDayToExpireController();

productsRoutes.get("/", listProductsController.handle);

productsRoutes.get("/expires-one", listProductsOneDayToExpireController.handle);

productsRoutes.get(
  "/expires-zero",
  listProductsZeroDayToExpireController.handle
);

productsRoutes.post("/", createProductController.handle);

productsRoutes.post(
  "/import",
  upload.single("file"),
  importProductsController.handle
);

export { productsRoutes };
