// import { transporter } from "../nodemailer";
// import { Request, Response } from "express";
// import users from "../db/models/users.model";
// import { UserService } from "../services/user.service";

// export const usersService = new UserService(new users());
// const emails = usersService.getAllUsersEmail();
// const url = "https://blockbuster-pf.vercel.app/";

// //MAIL POR ADD MOVIE  
// export const nodemailerAddMovie = async (req: Request, res: Response) => {
//   try {
    
//     (await emails).forEach((e) => {
//       transporter.sendMail({
//         from:`"BLOCKBUSTER"<blockbusterpg@gmail.com>`,
//         to: ``,
//         subject: "BLOCKBUSTER PF",
//         html: `<p>🎊 Hey! We are happy to announce that a new movie was added 🎬. Click here and enjoy the experience --> <strong><a href=${url}>Blockbuster 🎞</a></strong> experience! Hope you to enjoy it!! 🎊</p>`,
//       });
//     });
//     res.send("Email sended succefuly");
//   } catch (e) {
//     console.log(e);
//   }
// };

// //MAIL POR CREAR USUARIO -- WELCOME
// export const nodemailerCreateUser = async (req: Request, res: Response) => {
//   const {email} = req.body;
//   console.log(email)
//   const {nickname} = req.body;
//   console.log(nickname)
//   try {
//        await transporter.sendMail({
//       from:`"BLOCKBUSTER"<blockbusterpg@gmail.com>`,
//       to: ``,
//       subject: "BLOCKBUSTER PF",
//       html: `<p>Hey ${nickname}!!, Welcome to <strong><a href=${url} >Blockbuster 🎞</a></strong> experience! Hope you to enjoy it!!</p>`,
//     });
//     res.send("Email sended succefuly");
//   } catch (e) {
//     console.log(e);
//   }
// };

// //MAIL AVISO DE USUARIO BANNEADO
// export const nodemailerBannUser = async (req: Request, res: Response) => {
//   try {
//     const {email} = req.body;
//     console.log(email)
//     console.log({email})
//         await  transporter.sendMail({
//         from: `"BLOCKBUSTER"<blockbusterpg@gmail.com>` ,
//         to: ``,
//         subject: "BLOCKBUSTER PF",
//         html: `<p>Ops!! You got banned😤<strong>. Please click here to go<a href=${url}> Blockbuster Website 🎞</a></strong></p>`,
//       });
    
//     res.send("Email sended succefuly");
//   } catch (e) {
//     console.log(e);
//   }
// };

