"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../db"));
const products_model_1 = __importDefault(require("./products.model"));
const users_model_1 = __importDefault(require("./users.model"));
class favProducts extends sequelize_1.Model {
}
favProducts.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    idProduct: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: products_model_1.default,
            key: "id",
        },
    },
    idUser: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: users_model_1.default,
            key: "id",
        },
    },
}, {
    sequelize: db_1.default,
    paranoid: true,
});
products_model_1.default.belongsToMany(users_model_1.default, {
    through: favProducts
});
users_model_1.default.belongsToMany(products_model_1.default, {
    through: favProducts
});
exports.default = favProducts;
