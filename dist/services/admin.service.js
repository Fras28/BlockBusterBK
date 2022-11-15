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
            console.log("llegamos aca");
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
            const ojetEdit = yield products_model_2.default.findOne({ where: { id } });
            if (ojetEdit) {
                if (typeof (element) === "string") {
                    if (stat === "name") {
                        let articleX = yield products_model_2.default.update({ name: element }, { where: { id } });
                        return articleX;
                    }
                    if (stat === "description") {
                        let articleX = yield products_model_2.default.update({ description: element }, { where: { id } });
                        return articleX;
                    }
                    if (stat === "photo") {
                        let newArrP = [];
                        newArrP.push(element);
                        let articleX = yield products_model_2.default.update({ photo: [...ojetEdit.photo, ...newArrP] }, { where: { id } });
                        return articleX;
                    }
                    if (stat === "color") {
                        let newArrC = [];
                        newArrC.push(element);
                        if (ojetEdit.color) {
                            let articleX = yield products_model_2.default.update({ color: [...ojetEdit.color, ...newArrC] }, { where: { id } });
                            return articleX;
                        }
                        let articleX = yield products_model_2.default.update({ color: newArrC }, { where: { id } });
                        return articleX;
                    }
                }
                if (typeof (element) === "number") {
                    if (stat === "rated") {
                        let articleX = yield products_model_2.default.update({ rated: element }, { where: { id } });
                        return articleX;
                    }
                    if (stat === "price") {
                        let articleX = yield products_model_2.default.update({ price: element }, { where: { id } });
                        return articleX;
                    }
                    if (stat === "size") {
                        let newArrS = [];
                        newArrS.push(element);
                        if (ojetEdit.size) {
                            let articleX = yield products_model_2.default.update({ size: [...ojetEdit.size, ...newArrS] }, { where: { id } });
                            return articleX;
                        }
                        let articleX = yield products_model_2.default.update({ size: newArrS }, { where: { id } });
                        return articleX;
                    }
                }
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
