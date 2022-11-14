import axios from "axios";
import { Type } from "typescript";
import Products from "../db/models/products.model";
import comments from "../db/models/coments.model";
import {Comment} from "./coments.service"

export type Product = {
  id?: number;
  name: string;
  description: string;
  photo: string;
  rated: string;
  status: boolean;
  price:number;
  comment?: Comment
};

export class ProductsService {
  constructor(private ProductsModel: Product) {}


  //------------Metodo para llenar Base de Datos-------
  // async fullDataBase(MoviesArr: string[]) {
  //   MoviesArr.map(async (e: string) => {
  //     let films = await axios.get(url, { params: { t: e, apikey: apiKey } });
  //     const {
  //       Title: name,
  //       Year: year,
  //       Genre: genre,
  //       Poster: poster,
  //       Country: country,
  //       Rated: rated,
  //       Released: released,
  //       Runtime: runtime,
  //       Director: director,
  //       Actors: actors,
  //       Plot: plot,
  //       Language: language,
  //       imdbVotes: imdbVotes,
  //       imdbRating: imdbRating,
  //     } = films.data;

  //     await this.insertOne({
  //       id,
  //       name,
  //       rated,
  //       description,
  //       foto,
  //       comment,
  //       status:true,
  //     });
  //   });
  //   return "Data Base full filed";
  // }

  //-----------------Metodo para traer peliculas de Base de Datos-----
  /*================ TRAER TODO DE LA DATA BASE ====================== */
  async getAll() {
    const ProductsRows = await Products.findAll();
    console.log(ProductsRows.length);
    return ProductsRows;
  }

  //----------------- Creador de peliculas -------
  async insertOne(product: Product) {
    const oldProd = await Products.findOne({where:{name:product.name}})
    console.log(oldProd);
    if(!oldProd){
      return await Products.create(product, { validate: true });
    }else  console.log("ese producto ya existe") 
  }
}

//Todo probado :)