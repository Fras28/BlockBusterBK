"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../db"));
const coments_model_1 = __importDefault(require("./coments.model"));
const users_model_1 = __importDefault(require("./users.model"));
class usersComments extends sequelize_1.Model {
}
usersComments.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    commentsId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: coments_model_1.default,
            key: "id",
        },
    },
    usersId: {
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
exports.default = usersComments;
