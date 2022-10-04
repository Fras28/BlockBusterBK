import axios from "axios";
import { Type } from "typescript";
import Blockbuster from "../db/models/blockbuster.model";
import comments from "../db/models/coments.model";
import {Comment} from "../services/coments.service"
const url: string = `http://www.omdbapi.com/?t=`;
const apiKey: string = `d92c2f98`;

export type Movie = {
  id?: number;
  name: string;
  year: string;
  genre: string;
  poster: string;
  rated: string;
  released: string;
  runtime: string;
  director: string;
  actors: string;
  plot: string;
  language: string;
  country: string;
  imdbVotes: string;
  imdbRating: string;
  status:boolean;
  comment?: Comment
};

export class BlockbusterService {
  constructor(private blockbusterModel: Blockbuster) {}


  //------------Metodo para llenar Base de Datos-------
  async fullDataBase(MoviesArr: string[]) {
    MoviesArr.map(async (e: string) => {
      let films = await axios.get(url, { params: { t: e, apikey: apiKey } });
      const {
        Title: name,
        Year: year,
        Genre: genre,
        Poster: poster,
        Country: country,
        Rated: rated,
        Released: released,
        Runtime: runtime,
        Director: director,
        Actors: actors,
        Plot: plot,
        Language: language,
        imdbVotes: imdbVotes,
        imdbRating: imdbRating,
      } = films.data;

      await this.insertOne({
        name,
        year,
        genre,
        poster,
        country,
        rated,
        released,
        runtime,
        director,
        actors,
        plot,
        language,
        imdbVotes,
        imdbRating,
        status:true,
      });
    });
    return "Data Base full filed";
  }

  //-----------------Metodo para traer peliculas de Base de Datos-----
  async getAll() {
    const blockbusterRows = await Blockbuster.findAll();
    console.log(blockbusterRows.length);
    return blockbusterRows;
  }

  //----------------- Creador de peliculas -------
  async insertOne(movie: Movie) {
    console.log(movie);
    return await Blockbuster.create(movie, { validate: true });

  }
}

//Todo probado :)