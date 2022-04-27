import { Request, Response } from "express";

import { CreateProductUseCase } from "./CreateProductUseCase";

class CreateProductController {
  constructor(private createProductUseCase: CreateProductUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, expiration } = request.body;

    this.createProductUseCase.execute({ name, expiration });

    return response.status(201).send();
  }
}

export { CreateProductController };
