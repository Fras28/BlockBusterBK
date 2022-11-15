import { Request, Response, Router } from "express";
import product from "../db/models/products.model";
import { ProductsService } from "../services/product.service";
const productsService = new ProductsService(new product());


//MEDIANTE EL SERVICIO METE LAS PELICULAS EN BD
export const fullDbProducts = async (req: Request, res: Response) => {
  try {
    const dbProd = await product.findAll()
    return res.status(200).send(dbProd);
  } catch (e) {
    return res.status(404).send("products not found in db!");
  }
};

//GET BY ID
export const getProdcutId =async (req: Request, res: Response) => {
  const {id} = req.params;
  try{
    console.log(id)
    let products = await product.findAll({where:{id}})
    products.length? res.status(200).send(products) : res.status(400).send("Id not found!");
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
