import axios from "axios";
import { Type } from "typescript";
import Products from "../db/models/products.model";
import comments from "../db/models/coments.model";
import { Comment } from "./coments.service";

export type Product = {
  id?: number;
  name: string;
  description: string;
  size?: number[];
  color?: string[];
  photo: string[];
  rated: number;
  price: number;
  status: boolean;
  comment?: Comment;
};

export class ProductsService {
  constructor(private ProductsModel: Product) {}

  /*================ TRAER TODO DE LA DATA BASE ====================== */
  async getAll() {
    const ProductsRows = await Products.findAll();
    console.log(ProductsRows.length);
    return ProductsRows;
  }

  //----------------- Creador de peliculas -------
  async insertOne(product: Product) {
    const oldProd = await Products.findOne({ where: { name: product.name } });
    console.log(oldProd);
    if (!oldProd) {
      return await Products.create(product, { validate: true });
    } else console.log("ese producto ya existe");
  }
}

//Todo probado :)
