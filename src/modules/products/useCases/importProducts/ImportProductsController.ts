import { Request, Response } from "express";

import { ImportProductsUseCase } from "./ImportProductsUseCase";

class ImportProductsController {
  constructor(private importProductsUseCase: ImportProductsUseCase) {}
  handle(request: Request, response: Response): Response {
    const { file } = request;

    this.importProductsUseCase.execute(file);

    return response.send();
  }
}

export { ImportProductsController };
