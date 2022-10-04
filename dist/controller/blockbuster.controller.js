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
exports.addMovie = exports.getMovieId = exports.fullDbMovies = void 0;
const blockbuster_model_1 = __importDefault(require("../db/models/blockbuster.model"));
const blockbuster_service_1 = require("../services/blockbuster.service");
const infoSec_1 = require("../infoSec");
const filmsName = infoSec_1.MoviesArr;
const blockbusterService = new blockbuster_service_1.BlockbusterService(new blockbuster_model_1.default());
//MEDIANTE EL SERVICIO METE LAS PELICULAS EN BD
const fullDbMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dbMovies = yield blockbuster_model_1.default.findAll();
        if (dbMovies.length === 0) {
            yield blockbusterService.fullDataBase(filmsName);
            const dbMovies = yield blockbuster_model_1.default.findAll();
            return res.status(200).send(dbMovies);
        }
        return res.status(200).send(dbMovies);
    }
    catch (e) {
        return res.status(404).send("films not found in db!");
    }
});
exports.fullDbMovies = fullDbMovies;
//GET BY ID
const getMovieId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        console.log(id);
        let movie = yield blockbuster_model_1.default.findAll({ where: { id } });
        movie.length ? res.status(200).send(movie) : res.status(400).send("Id not found!");
    }
    catch (e) {
        return res.status(404).send(e);
    }
});
exports.getMovieId = getMovieId;
//POST PARA CREAR PELICULAS
const addMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req);
    try {
        const dbMovie = yield blockbusterService.insertOne(req.body);
        console.log(dbMovie);
        return res.status(200).send(dbMovie);
    }
    catch (e) {
        return res.status(404).send(e);
    }
});
exports.addMovie = addMovie;
//Todo probado :)
