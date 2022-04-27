import { Request, Response } from "express";
import { container } from "tsyringe";

import { ImportProductsUseCase } from "./ImportProductsUseCase";

class ImportProductsController {
  handle(request: Request, response: Response): Response {
    const { file } = request;
    const importProductsUseCase = container.resolve(ImportProductsUseCase);
    importProductsUseCase.execute(file);

    return response.send();
  }
}

export { ImportProductsController };
