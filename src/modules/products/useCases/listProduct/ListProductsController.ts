import { Request, Response } from "express";

import { ListProductsUseCase } from "./ListProductsUseCase";

class ListProductsController {
  constructor(private listProductsUsecase: ListProductsUseCase) {}

  handle(request: Request, response: Response): Response {
    const all = this.listProductsUsecase.execute();
    return response.json(all);
  }
}

export { ListProductsController };
