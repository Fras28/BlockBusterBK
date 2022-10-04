"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../db"));
class blockbuster extends sequelize_1.Model {
}
blockbuster.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
    year: {
        type: sequelize_1.DataTypes.STRING,
    },
    genre: {
        type: sequelize_1.DataTypes.STRING,
    },
    poster: {
        type: sequelize_1.DataTypes.STRING,
    },
    rated: {
        type: sequelize_1.DataTypes.STRING,
    },
    released: {
        type: sequelize_1.DataTypes.STRING,
    },
    runtime: {
        type: sequelize_1.DataTypes.STRING,
    },
    director: {
        type: sequelize_1.DataTypes.STRING,
    },
    actors: {
        type: sequelize_1.DataTypes.STRING,
    },
    language: {
        type: sequelize_1.DataTypes.STRING,
    },
    plot: {
        type: sequelize_1.DataTypes.STRING,
    },
    country: {
        type: sequelize_1.DataTypes.STRING,
    },
    imdbVotes: {
        type: sequelize_1.DataTypes.STRING,
    },
    imdbRating: {
        type: sequelize_1.DataTypes.STRING,
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
    }
}, { sequelize: db_1.default, paranoid: true });
exports.default = blockbuster;
