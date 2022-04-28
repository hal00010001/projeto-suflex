import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListProductsZeroDayToExpireUseCase } from "./ListProductsZeroDayToExpireUseCase";

class ListProductsZeroDayToExpireController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listProductsZeroDayToExpireUseCase = container.resolve(
      ListProductsZeroDayToExpireUseCase
    );
    const all = await listProductsZeroDayToExpireUseCase.execute();
    return response.json(all);
  }
}

export { ListProductsZeroDayToExpireController };
