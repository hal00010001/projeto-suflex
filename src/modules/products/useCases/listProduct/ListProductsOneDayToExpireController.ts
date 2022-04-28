import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListProductsOneDayToExpireUseCase } from "./ListProductsOneDayToExpireUseCase";

class ListProductsOneDayToExpireController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listProductsOneDayToExpireUseCase = container.resolve(
      ListProductsOneDayToExpireUseCase
    );
    const all = await listProductsOneDayToExpireUseCase.execute();
    return response.json(all);
  }
}

export { ListProductsOneDayToExpireController };
