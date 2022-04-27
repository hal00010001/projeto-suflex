import { parse } from "csv-parse";
import fs from "fs";

import { IProductsRepository } from "../../repositories/IProductsRepository";

interface IImportProduct {
  name: string;
  expiration: number;
}

class ImportProductsUseCase {
  constructor(private productsRepository: IProductsRepository) {}

  loadProducts(file: Express.Multer.File): Promise<IImportProduct[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);

      const products: IImportProduct[] = [];

      const parseFile = parse();

      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [name, expiration] = line;
          products.push({
            name,
            expiration,
          });
        })
        .on("end", () => {
          resolve(products);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const products = await this.loadProducts(file);

    products.map(async (product) => {
      const { name, expiration } = product;
      this.productsRepository.create({
        name,
        expiration,
      });
    });
  }
}

export { ImportProductsUseCase };
