"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transporter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
exports.transporter = nodemailer_1.default.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "blockbusterpfg@gmail.com",
        pass: "qvxtamftvhfjuzzu", // generated ethereal password
    },
});
exports.transporter.verify().then(() => {
    console.log("Ready for send email`s");
});
