import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateProductUseCase } from "./CreateProductUseCase";

class CreateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, expiration } = request.body;
    const createProductUseCase = container.resolve(CreateProductUseCase);
    await createProductUseCase.execute({ name, expiration });

    return response.status(201).send();
  }
}

export { CreateProductController };
