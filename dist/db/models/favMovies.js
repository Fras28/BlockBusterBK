"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../db"));
const blockbuster_model_1 = __importDefault(require("./blockbuster.model"));
const users_model_1 = __importDefault(require("./users.model"));
class favMovies extends sequelize_1.Model {
}
favMovies.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    idMovie: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: blockbuster_model_1.default,
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
blockbuster_model_1.default.belongsToMany(users_model_1.default, {
    through: favMovies
});
users_model_1.default.belongsToMany(blockbuster_model_1.default, {
    through: favMovies
});
exports.default = favMovies;
