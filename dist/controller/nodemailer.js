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
exports.nodemailerUnbannUser = exports.nodemailerBannUser = exports.nodemailerCreateUser = exports.usersService = void 0;
const nodemailer_1 = require("../nodemailer");
const users_model_1 = __importDefault(require("../db/models/users.model"));
const user_service_1 = require("../services/user.service");
exports.usersService = new user_service_1.UserService(new users_model_1.default());
const emails = exports.usersService.getAllUsersEmail();
const url = "https://blockbuster-pf.vercel.app/";
//MAIL POR ADD MOVIE  
// export const nodemailerAddMovie = async (req: Request, res: Response) => {
//   try {
//     (await emails).forEach((e) => {
//       transporter.sendMail({
//         from: '"BLOCKBUSTER" <blockbusterpfg@gmail.com>',
//         to: e,
//         subject: "BLOCKBUSTER PF",
//         html: `<p>🎊 Hey! We are happy to announce that a new movie was added 🎬. Click here and enjoy the experience --> <strong><a href=${url}>Blockbuster 🎞</a></strong> experience! Hope you to enjoy it!! 🎊</p>`,
//       });
//     });
//     res.send("Email sended succefuly");
//   } catch (e) {
//     console.log(e);
//   }
// };
//MAIL POR CREAR USUARIO -- WELCOME
const nodemailerCreateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    console.log(email, "aca");
    const { nickname } = req.body;
    console.log(nickname);
    try {
        yield nodemailer_1.transporter.sendMail({
            from: '"BLOCKBUSTER" <blockbusterpfg@gmail.com>',
            to: email,
            subject: "BLOCKBUSTER PF",
            html: `<p>Hey ${nickname}!!, Welcome to <strong><a href=${url} >Blockbuster 🎞</a></strong> experience! Hope you to enjoy it!!</p>`,
        });
        res.send("Email sended succefuly");
    }
    catch (e) {
        console.log(e);
    }
});
exports.nodemailerCreateUser = nodemailerCreateUser;
//MAIL AVISO DE USUARIO BANNEADO
const nodemailerBannUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        console.log(email);
        console.log({ email });
        nodemailer_1.transporter.sendMail({
            from: '"BLOCKBUSTER" <blockbusterpfg@gmail.com>',
            to: email,
            subject: "BLOCKBUSTER PF",
            html: `<p>Ops!! You got banned😤<strong>. Please click here to go<a href=${url}> Blockbuster Website 🎞</a></strong></p>`,
        });
        res.send("Email sended succefuly");
    }
    catch (e) {
        console.log(e);
    }
});
exports.nodemailerBannUser = nodemailerBannUser;
const nodemailerUnbannUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        console.log(email);
        console.log({ email });
        nodemailer_1.transporter.sendMail({
            from: '"BLOCKBUSTER" <blockbusterpfg@gmail.com>',
            to: email,
            subject: "BLOCKBUSTER PF",
            html: `<p>Hey!! You got unbanned😤<strong>. Please click here to go<a href=${url}> Blockbuster Website 🎞</a></strong></p>`,
        });
        res.send("Email sended succefuly");
    }
    catch (e) {
        console.log(e);
    }
});
exports.nodemailerUnbannUser = nodemailerUnbannUser;
