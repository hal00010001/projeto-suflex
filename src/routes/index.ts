import { Router } from "express";

import "../infra/connection";
import { productsRoutes } from "./products.routes";

const router = Router();

router.use("/products", productsRoutes);

export { router };
