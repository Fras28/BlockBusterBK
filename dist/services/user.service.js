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
exports.UserService = void 0;
const favProducts_1 = __importDefault(require("../db/models/favProducts"));
const users_model_1 = __importDefault(require("../db/models/users.model"));
class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    //-------------Crear Usuario --------
    insertUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            user.status = true;
            user.category = "user";
            console.log(user);
            const insertedUser = yield users_model_1.default.create(user, { validate: true });
            return insertedUser;
        });
    }
    // async defineCategoryGold(id: number) {
    //   let userX = await users.update({ category: "gold" }, { where: { id } });
    //   return userX;
    // }
    defineCategoryGoldToken(id, token) {
        return __awaiter(this, void 0, void 0, function* () {
            let userX = yield users_model_1.default.update({ token }, { where: { id } });
            return userX;
        });
    }
    // async defineCategorySilver(id: number) {
    //   let userX = await users.update({ category: "silver" }, { where: { id } });
    //   return userX;
    // }
    defineCategorySilverToken(id, token) {
        return __awaiter(this, void 0, void 0, function* () {
            let userX = yield users_model_1.default.update({ token }, { where: { id } });
            return userX;
        });
    }
    // async defineCategoryUser(id: number) {
    //   let userX = await users.update({ category: "user" }, { where: { id } });
    //   return userX;
    // }
    deletUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let deletUser = users_model_1.default.destroy({ where: { id } });
            return deletUser;
        });
    }
    changePic(name, date, lastname, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let userX = yield users_model_1.default.update({ name, lastname, date }, { where: { id } });
            return userX;
        });
    }
    getUserId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let userX = yield users_model_1.default.findOne({ where: { id } });
            return userX;
        });
    }
    getAllUsersEmail() {
        return __awaiter(this, void 0, void 0, function* () {
            let emailUser = yield users_model_1.default.findAll();
            let mapMail = emailUser.map((e) => e.email);
            return mapMail;
        });
    }
    newFav(idProduct, idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            let movie = yield favProducts_1.default.findOne({ where: { idUser, idProduct } });
            if (!movie) {
                const lista = yield favProducts_1.default.create({ idProduct, idUser }, { validate: true });
                return lista;
            }
            if (movie) {
                let arrNoFav = yield movie.destroy();
                return arrNoFav;
            }
        });
    }
    listFav() {
        return __awaiter(this, void 0, void 0, function* () {
            const listMovies = yield favProducts_1.default.findAll();
            return listMovies;
        });
    }
}
exports.UserService = UserService;
