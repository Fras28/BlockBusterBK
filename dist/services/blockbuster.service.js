"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockbusterService = void 0;
const axios_1 = __importDefault(require("axios"));
const blockbuster_model_1 = __importDefault(require("../db/models/blockbuster.model"));
const url = `http://www.omdbapi.com/?t=`;
const apiKey = `d92c2f98`;
class BlockbusterService {
    constructor(blockbusterModel) {
        this.blockbusterModel = blockbusterModel;
    }
    //------------Metodo para llenar Base de Datos-------
    fullDataBase(MoviesArr) {
        return __awaiter(this, void 0, void 0, function* () {
            MoviesArr.map((e) => __awaiter(this, void 0, void 0, function* () {
                let films = yield axios_1.default.get(url, { params: { t: e, apikey: apiKey } });
                const { Title: name, Year: year, Genre: genre, Poster: poster, Country: country, Rated: rated, Released: released, Runtime: runtime, Director: director, Actors: actors, Plot: plot, Language: language, imdbVotes: imdbVotes, imdbRating: imdbRating, } = films.data;
                yield this.insertOne({
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
                    status: true,
                });
            }));
            return "Data Base full filed";
        });
    }
    //-----------------Metodo para traer peliculas de Base de Datos-----
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const blockbusterRows = yield blockbuster_model_1.default.findAll();
            console.log(blockbusterRows.length);
            return blockbusterRows;
        });
    }
    //----------------- Creador de peliculas -------
    insertOne(movie) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(movie);
            return yield blockbuster_model_1.default.create(movie, { validate: true });
        });
    }
}
exports.BlockbusterService = BlockbusterService;
//Todo probado :)
