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
exports.bannComments = exports.getUser = exports.fullUsers = exports.suspProduct = exports.editProduct = exports.newProduct = exports.newAdmin = exports.unBannUser = exports.bannUser = void 0;
const users_model_1 = __importDefault(require("../db/models/users.model"));
const admin_service_1 = require("../services/admin.service");
const adminService = new admin_service_1.AdminService(new users_model_1.default());
//Bannear usuariooo
const bannUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        let user = yield adminService.getUserById(id);
        console.log(user);
        if (user != null) {
            yield adminService.bannUser(id);
            res.status(200).send("User banned successfully!");
        }
        else {
            res.status(404).send("User not found");
        }
    }
    catch (e) {
        res.status(404).send(e);
    }
});
exports.bannUser = bannUser;
//Unbann usuario
const unBannUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        let user = yield adminService.getUserById(id);
        console.log(user);
        if (user != null) {
            yield adminService.unnBanUser(id);
            res.status(200).send("User unbanned successfully!");
        }
        else {
            res.status(404).send("User not found");
        }
    }
    catch (e) {
        res.status(404).send(e);
    }
});
exports.unBannUser = unBannUser;
//Crear nuevo administrador
const newAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        let user = yield adminService.getUserById(id);
        console.log(user);
        if (user != null) {
            yield adminService.defineAdmin(id);
            res.status(200).send(`new admin id=${id}`);
        }
        else {
            res.status(404).send(`Something went wrong! Try again.`);
        }
    }
    catch (e) {
        res.status(404).send(e);
    }
});
exports.newAdmin = newAdmin;
//Crear nueva pelicula
const newProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const infoNewProduct = req.body;
        yield adminService.addProduct(infoNewProduct);
        res.status(200).send(`Product: ${infoNewProduct.name}  added successfully👍`);
    }
    catch (e) {
        console.log("lalalalalalalaa");
        res.status(400).send("something went rong whit this Prodcut, or already exists ");
    }
});
exports.newProduct = newProduct;
const editProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { stat, element, id } = req.body;
    try {
        // if(element.typeof === "string"){
        yield adminService.modifierProduct(stat, element, id);
        res.status(200).send(`the product was successfully modified`);
        // }
        // else {await adminService.changePrice(element, id)
        // res.status(200).send(`the product price was successfully modified`);}
    }
    catch (e) {
        res.status(400).send("something went rong whit this Prodcut, or already exists ");
    }
});
exports.editProduct = editProduct;
//suspender pelicula
const suspProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    console.log(id);
    try {
        yield adminService.statusProduct(id);
        res.status(200).send("The article was Updated");
    }
    catch (e) {
        res.status(400).send("Something went rong whit this article ​​");
    }
});
exports.suspProduct = suspProduct;
//Busca todos los usuarios
const fullUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usersArr = yield adminService.allUsers();
        res.status(200).send(usersArr);
    }
    catch (e) {
        res.status(404).send("No users in DB ");
    }
});
exports.fullUsers = fullUsers;
//Busca user por email
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.params;
    try {
        let user = yield adminService.getUserByEmail(email);
        res.status(200).send(user);
    }
    catch (e) {
        res.status(404).send("User not found");
    }
});
exports.getUser = getUser;
// Bann comments
const bannComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idUser } = req.body;
    console.log(idUser);
    try {
        let bannedComment = yield adminService.bannComment(idUser);
        res.status(200).send(bannedComment);
    }
    catch (e) {
        res.status(404).send("User not found");
    }
});
exports.bannComments = bannComments;
