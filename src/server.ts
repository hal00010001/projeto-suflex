import express from "express";

import { productsRoutes } from "./routes/products.routes";

import "./infra/connection";

const app = express();

app.use(express.json());
app.use(productsRoutes);

app.listen(3740, () => console.log("Server is running!"));
