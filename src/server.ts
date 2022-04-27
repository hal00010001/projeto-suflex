import express from "express";

import "./infra/connection";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);

app.listen(3740, () => console.log("Server is running!"));
