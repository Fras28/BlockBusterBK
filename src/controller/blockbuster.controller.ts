import { Request, Response, Router } from "express";
import blockbuster from "../db/models/blockbuster.model";
import { BlockbusterService } from "../services/blockbuster.service";
import { MoviesArr } from "../infoSec";

const filmsName = MoviesArr;
const blockbusterService = new BlockbusterService(new blockbuster());


//MEDIANTE EL SERVICIO METE LAS PELICULAS EN BD
export const fullDbMovies = async (req: Request, res: Response) => {
  try {
    const dbMovies = await blockbuster.findAll()
    if (dbMovies.length === 0) {
     await blockbusterService.fullDataBase(filmsName);
      const dbMovies = await blockbuster.findAll()
      return res.status(200).send(dbMovies);
    }
    return res.status(200).send(dbMovies);
  } catch (e) {
    return res.status(404).send("films not found in db!");
  }
};

//GET BY ID
export const getMovieId =async (req: Request, res: Response) => {
  const {id} = req.params;
  try{
    console.log(id)
    let movie = await blockbuster.findAll({where:{id}})
    movie.length? res.status(200).send(movie) : res.status(400).send("Id not found!");
  }
  catch(e){
    return res.status(404).send(e);
  }
}

//POST PARA CREAR PELICULAS
export const addMovie = async (req: Request, res: Response) => {
  console.log(req);
  try {
    const dbMovie = await blockbusterService.insertOne(req.body);
    console.log(dbMovie);
    return res.status(200).send(dbMovie);
  } catch (e) {
    return res.status(404).send(e);
  }
};
 

//Todo probado :)
