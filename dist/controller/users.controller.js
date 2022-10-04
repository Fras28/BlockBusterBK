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
exports.listFav = exports.addFav = exports.editUser = exports.deletUser = exports.addLimit = exports.addUser = exports.usersService = void 0;
const users_model_1 = __importDefault(require("../db/models/users.model"));
const user_service_1 = require("../services/user.service");
exports.usersService = new user_service_1.UserService(new users_model_1.default());
//CREAR USUARIO
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req);
    try {
        const dbUser = yield exports.usersService.insertUser(req.body);
        console.log(dbUser);
        return res.status(200).send(dbUser);
    }
    catch (e) {
        return res.status(400).send(e);
    }
});
exports.addUser = addUser;
const addLimit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, idMovie } = req.body;
    try {
        yield exports.usersService.limiter(id, idMovie);
        res.status(200).send('+1 limiter Movie ❤️');
    }
    catch (_a) {
        res.status(400).send('Your limit exceeded 💔 ');
    }
});
exports.addLimit = addLimit;
const deletUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        yield exports.usersService.deletUser(id);
        res.status(200).send("User deleted successfully");
    }
    catch (e) {
        res.status(400).send("User not found");
    }
});
exports.deletUser = deletUser;
//POSTA PARA CAMBIO DE FOTO
const editUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, lastname, date, id } = req.body;
    try {
        let editUser = yield exports.usersService.changePic(name, date, lastname, id);
        let edited = yield exports.usersService.getUserId(id);
        res.status(200).send(edited);
    }
    catch (e) {
        res.status(404).send("Something went wrong with your change👎​");
    }
});
exports.editUser = editUser;
const addFav = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idMovie, idUser } = req.body;
    try {
        const newFav = yield exports.usersService.newFav(idMovie, idUser);
        res.status(200).send(newFav);
    }
    catch (e) {
        res.status(404).send("bad request");
    }
});
exports.addFav = addFav;
const listFav = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allFavList = yield exports.usersService.listFav();
        return res.status(200).send(allFavList);
    }
    catch (e) {
        res.status(404).send("Empty fav list");
    }
});
exports.listFav = listFav;
