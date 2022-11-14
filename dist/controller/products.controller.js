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
exports.addProduct = exports.getProdcutId = exports.fullDbProducts = void 0;
const products_model_1 = __importDefault(require("../db/models/products.model"));
const product_service_1 = require("../services/product.service");
const productsService = new product_service_1.ProductsService(new products_model_1.default());
//MEDIANTE EL SERVICIO METE LAS PELICULAS EN BD
const fullDbProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dbProd = yield products_model_1.default.findAll();
        return res.status(200).send(dbProd);
    }
    catch (e) {
        return res.status(404).send("products not found in db!");
    }
});
exports.fullDbProducts = fullDbProducts;
//GET BY ID
const getProdcutId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        console.log(id);
        let products = yield products_model_1.default.findAll({ where: { id } });
        products.length ? res.status(200).send(products) : res.status(400).send("Id not found!");
    }
    catch (e) {
        return res.status(404).send(e);
    }
});
exports.getProdcutId = getProdcutId;
//POST PARA CREAR PELICULAS
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const porducto = req.body;
    console.log(req);
    try {
        const dbProd = yield productsService.insertOne(porducto);
        console.log(dbProd);
        return res.status(200).send(dbProd);
    }
    catch (e) {
        return res.status(404).send(e);
    }
});
exports.addProduct = addProduct;
//Todo probado :)
