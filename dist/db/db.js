"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;
const dbUrl = process.env.DATABASE_URL;
// const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
//   host: dbHost,
//   dialect: "postgres",
//   logging: false,
// });
const sequelize = new sequelize_1.Sequelize(dbUrl, {
    logging: false,
    native: false,
    //CONFIGURACION ADICIONAL PARA DEPLOYAR
    
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});
exports.default = sequelize;
