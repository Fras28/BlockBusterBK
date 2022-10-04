"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../db"));
class comments extends sequelize_1.Model {
}
comments.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
    idUser: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    movieId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    coment: {
        type: sequelize_1.DataTypes.STRING(300),
    },
    picture: {
        type: sequelize_1.DataTypes.STRING,
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
}, { sequelize: db_1.default, paranoid: true });
exports.default = comments;
