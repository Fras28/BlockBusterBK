"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_controller_1 = require("../controller/products.controller");
const users_controller_1 = require("../controller/users.controller");
const comments_controller_1 = require("../controller/comments.controller");
const admin_controller_1 = require("../controller/admin.controller");
// import {apiGold, createPaymentGold, executePaymentGold, goldToken} from "../controller/paymentGold.controller"
// import {apiSilver, createPaymentSilver, executePaymentSilver, silverToken} from "../controller/paymentSilver.controller"
//import { nodemailerBannUser, nodemailerCreateUser, nodemailerUnbannUser } from "../controller/nodemailer";
const router = (0, express_1.Router)();
//------------------------------------- GETS DE MOVIES--------------------------------
//GET ALL MOVIES
router.get("/", products_controller_1.fullDbProducts);
//GET BY ID MOVIES
router.get('/detail/:id', products_controller_1.getProdcutId);
//------------------------------------ GETS DE COMMENTS--------------------------------
//GET COMMENT ID USER
router.get("/commentUser", comments_controller_1.byIdCommentsUser);
//GET COMMENT ID MOVIES
router.get("/comments", comments_controller_1.byIdComments);
//GET COMMENTS
router.get("/allComments", comments_controller_1.fullDBComments);
//----------------------------------- POSTS DE COMMENTS--------------------------------
//POST COMMENTS
router.post('/detail/:id', comments_controller_1.addComment);
//DELETE COMMENT
router.post('/detail', comments_controller_1.deleteComments);
//DELETE COMMENT
router.put('/editComment', comments_controller_1.editComments);
//----------------------------------- POSTS/PUT DE USERS--------------------------------
//CREAR USER--> el modelo de users(esta en ds en Info-Back)
router.post('/newU', users_controller_1.addUser);
//CREAR USER--> el modelo de users(esta en ds en Info-Back, name, lastname, date)
router.put('/editU', users_controller_1.editUser);
//AGREGA FAVORITO
router.post('/addFav', users_controller_1.addFav);
//TODOS LOS FAVORITOS
router.get('/allFavs', users_controller_1.listFav);
//----------------------------------- GETS DE ADMIN--------------------------------
//GET ALL USERS--> para slect de todos los usuarios
router.get("/users", admin_controller_1.fullUsers);
//GET USER BY EMAIL--> necesito email por params en string
router.get("/Uemail/:email", admin_controller_1.getUser);
//----------------------------------- POSTS/PUTS DE ADMIN  PARA USERS--------------------------------
//BANN USER--> necesito id(numerico) por body
router.put("/bannUser", admin_controller_1.bannUser);
//UNBANN USER--> necesito id(numerico) por body
router.put("/unBannUser", admin_controller_1.unBannUser);
//CREATE NEW ADMIN--> necesito id(numerico) por body
router.put("/createAdm", admin_controller_1.newAdmin);
//DELETE USERS 
router.post('/deletUser', users_controller_1.deletUser);
//------------------------------------- POSTS/PUTS DE MOVIES BY ADMIN-------------------------------
//SUSPEND MOVIE--> necesito id(numerico) por body
router.put("/removeP", admin_controller_1.suspProduct);
//POSTS MOVIE--> el modelo de blockbusters(esta en ds en Info-Back)
router.post('/addP', admin_controller_1.newProduct);
router.put("/editP", admin_controller_1.editProduct);
// //LIMITER GOLD/SILVER
// router.put("/limiter", addLimit)
//------------------------------------- POSTS/PUTS DE COMMENTS BY ADMIN-------------------------------
//BANN COMMENT
router.put("/bannComments", admin_controller_1.bannComments);
//-------------------------------------- NODEMAILER------------------------------------------
//SEND SPAM NEW MOVIE 
// router.get("/nodemailer", nodemaileraddProduct)
//SEND SPAM WELCOME EMAILS TO CLIENTS
//router.get("/nodemaileru", nodemailerCreateUser)
//SEND SPAM THE THE ADMIN BANN SOMEONE
//router.get("/nodemailerb", nodemailerBannUser)
//UNBANN USER
//router.get("/nodemailerun", nodemailerUnbannUser)
//---------------------------------------------- PAYPAL ---------------------------------------------------------
// //    http://localhost:3000/create-paymentGold [POST]
// router.post('/create-paymentGold', createPaymentGold)
// //PAYMENT
// router.get('/execute-paymentGold', executePaymentGold )
// //    http://localhost:3000/create-paymentSilver[POST]
// router.post('/create-paymentSilver', createPaymentSilver)
// //PAYMENT
// router.get('/execute-paymentSilver', executePaymentSilver)
//CHANGE GOLD
// router.put('/apiGold', apiGold)
// //CHANGE SILVER
// router.put('/apiSilver', apiSilver)
// //FUNCION PARA SETEAR TOKEN SILVER
// router.put("/setTokenSilver", silverToken)
//FUNCION PARA SETEAR TOKEN GOLD
// router.put("/setTokenGold", goldToken)
exports.default = router;
