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
exports.AdminService = void 0;
const products_model_1 = __importDefault(require("../db/models/products.model"));
const users_model_1 = __importDefault(require("../db/models/users.model"));
const coments_model_1 = __importDefault(require("../db/models/coments.model"));
const products_model_2 = __importDefault(require("../db/models/products.model"));
class AdminService {
    constructor(UserModel) {
        this.UserModel = UserModel;
    }
    bannUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let userX = yield users_model_1.default.update({ status: false }, { where: { id } });
            return userX;
        });
    }
    unnBanUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let userX = yield users_model_1.default.update({ status: true }, { where: { id } });
            return userX;
        });
    }
    addProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const findInDb = yield products_model_1.default.findOne({ where: { name: product.name } });
            console.log(findInDb);
            if (!findInDb) {
                return yield products_model_1.default.create(product, { validate: true });
            }
            throw Error;
        });
    }
    statusProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const productInfo = yield products_model_1.default.findAll({ where: { id } });
            if (productInfo[0].status === true) {
                const byeProduct = yield products_model_1.default.update({ status: false }, { where: { id } });
                return !!byeProduct;
            }
            else {
                const byeProduct = yield products_model_1.default.update({ status: true }, { where: { id } });
                return !!byeProduct;
            }
        });
    }
    //  name: string;
    //   description: string;
    //   photo: string;
    //   rated: string;
    modifierProduct(stat, element, id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (stat === "name") {
                let userX = yield products_model_2.default.update({ name: element }, { where: { id } });
                return userX;
            }
            if (stat === "description") {
                let userX = yield products_model_2.default.update({ description: element }, { where: { id } });
                return userX;
            }
            if (stat === "photo") {
                let userX = yield products_model_2.default.update({ photo: element }, { where: { id } });
                return userX;
            }
            if (stat === "rated") {
                let userX = yield products_model_2.default.update({ rated: element }, { where: { id } });
                return userX;
            }
        });
    }
    defineAdmin(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let userX = yield users_model_1.default.update({ category: "admin" }, { where: { id } });
            return userX;
        });
    }
    editeName(id, string) {
        return __awaiter(this, void 0, void 0, function* () {
            let editName = yield products_model_1.default.update({ name: string }, { where: { id } });
            return editName;
        });
    }
    // async editeYear(id: number, string: string) {
    //   let editName = await Products.update(
    //     { year: string },
    //     { where: { id } }
    //   );
    //   return editName;
    // }
    editePoster(id, string) {
        return __awaiter(this, void 0, void 0, function* () {
            let editName = yield products_model_1.default.update({ photo: string }, { where: { id } });
            return editName;
        });
    }
    // async editeGenre(id: number, string: string) {
    //   let editName = await Blockbuster.update(
    //     { genre: string },
    //     { where: { id } }
    //   );
    //   return editName;
    // }
    // async editeCountry(id: number, string: string) {
    //   let editName = await Blockbuster.update(
    //     { country: string },
    //     { where: { id } }
    //   );
    //   return editName;
    // }
    editeRated(id, string) {
        return __awaiter(this, void 0, void 0, function* () {
            let editName = yield products_model_1.default.update({ rated: string }, { where: { id } });
            return editName;
        });
    }
    // async editeReleased(id: number, string: string) {
    //   let editName = await Blockbuster.update(
    //     { released: string },
    //     { where: { id } }
    //   );
    //   return editName;
    // }
    // async editeRuntime(id: number, string: string) {
    //   let editName = await Blockbuster.update(
    //     { runtime: string },
    //     { where: { id } }
    //   );
    //   return editName;
    // }
    // async editeDirector(id: number, string: string) {
    //   let editName = await Blockbuster.update(
    //     { director: string },
    //     { where: { id } }
    //   );
    //   return editName;
    // }
    // async editeActors(id: number, string: string) {
    //   let editName = await Blockbuster.update(
    //     { actors: string },
    //     { where: { id } }
    //   );
    //   return editName;
    // }
    // async editePlot(id: number, string: string) {
    //   let editName = await Blockbuster.update(
    //     { plot: string },
    //     { where: { id } }
    //   );
    //   return editName;
    // }
    // async editeLanguage(id: number, string: string) {
    //   let editName = await Blockbuster.update(
    //     { language: string },
    //     { where: { id } }
    //   );
    //   return editName;
    // }
    // async editeimdbVotes(id: number, string: string) {
    //   let editName = await Blockbuster.update(
    //     { imdbVotes: string },
    //     { where: { id } }
    //   );
    //   return editName;
    // }
    // async editeimdbRating(id: number, string: string) {
    //   let editName = await Blockbuster.update(
    //     { imdbRating: string },
    //     { where: { id } }
    //   );
    //   return editName;
    // }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            let emailUser = yield users_model_1.default.findOne({ where: { email } });
            return emailUser;
        });
    }
    allUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            let arrUsers = yield users_model_1.default.findAll();
            arrUsers.sort((a, b) => {
                if (a.nickname < b.nickname) {
                    return 1;
                }
                if (b.nickname < a.nickname) {
                    return -1;
                }
                return 0;
            });
            return arrUsers;
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let idUser = yield users_model_1.default.findOne({ where: { id } });
            return idUser;
        });
    }
    bannComment(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            let bann = yield coments_model_1.default.update({ status: false }, { where: { idUser } });
            return bann;
        });
    }
}
exports.AdminService = AdminService;
