"use strict";
// import { Request, Response, Router } from "express";
// import blockbuster from "../db/models/blockbuster.model";
// import { BlockbusterService } from "../services/blockbuster.service";
// import { MoviesArr } from "../infoSec";
// const filmsName = MoviesArr;
// const blockbusterService = new BlockbusterService(new blockbuster());
// export const getAllMovies = async (req: Request, res: Response) => {
//   try {
//     const result = await blockbusterService.getAll();
//     return res.status(200).send(result);
//   } catch (e) {
//     return res.status(404).send("films not found");
//   }
// };
// export const fullDbMovies = async (req: Request, res: Response) => {
//   try {
//     const dbMovies = await blockbusterService.getAll();
//     if (dbMovies.length === 0) {
//       const inserMovies = await blockbusterService.fullDataBase(filmsName);
//       return res.status(200).send(inserMovies);
//     }
//     return res.status(200).send(dbMovies);
//   } catch (e) {
//     return res.status(404).send("films not found in db");
//   }
// };
// // :D
