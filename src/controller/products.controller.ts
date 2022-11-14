import { Request, Response, Router } from "express";
import product from "../db/models/products.model";
import { ProductsService } from "../services/product.service";
import { MoviesArr } from "../infoSec";
const filmsName = MoviesArr;
const productsService = new ProductsService(new product());


//MEDIANTE EL SERVICIO METE LAS PELICULAS EN BD
export const fullDbProducts = async (req: Request, res: Response) => {
  try {
    const dbMovies = await product.findAll()
    if (dbMovies.length === 0) {
    //  await productsService.fullDataBase(filmsName);
      const dbMovies = await product.findAll()
      return res.status(200).send(dbMovies);
    }
    return res.status(200).send(dbMovies);
  } catch (e) {
    return res.status(404).send("films not found in db!");
  }
};

//GET BY ID
export const getProdcutId =async (req: Request, res: Response) => {
  const {id} = req.params;
  try{
    console.log(id)
    let movie = await product.findAll({where:{id}})
    movie.length? res.status(200).send(movie) : res.status(400).send("Id not found!");
  }
  catch(e){
    return res.status(404).send(e);
  }
}

//POST PARA CREAR PELICULAS
export const addProduct = async (req: Request, res: Response) => {
  const porducto = req.body
  console.log(req);
  try {
    const dbProd = await productsService.insertOne(porducto);
    console.log(dbProd);
    return res.status(200).send(dbProd);
  } catch (e) {
    return res.status(404).send(e);
  }
};
 

//Todo probado :)
