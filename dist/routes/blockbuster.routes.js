"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blockbuster_controller_1 = require("../controller/blockbuster.controller");
const users_controller_1 = require("../controller/users.controller");
const comments_controller_1 = require("../controller/comments.controller");
const admin_controller_1 = require("../controller/admin.controller");
const paymentGold_controller_1 = require("../controller/paymentGold.controller");
const paymentSilver_controller_1 = require("../controller/paymentSilver.controller");
const nodemailer_1 = require("../controller/nodemailer");
const router = (0, express_1.Router)();
//------------------------------------- GETS DE MOVIES--------------------------------
//GET ALL MOVIES
router.get("/", blockbuster_controller_1.fullDbMovies);
//GET BY ID MOVIES
router.get('/detail/:id', blockbuster_controller_1.getMovieId);
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
router.put("/removeM", admin_controller_1.suspMovie);
//POSTS MOVIE--> el modelo de blockbusters(esta en ds en Info-Back)
router.post('/addM', blockbuster_controller_1.addMovie);
//LIMITER GOLD/SILVER
router.put("/limiter", users_controller_1.addLimit);
//------------------------------------- POSTS/PUTS DE COMMENTS BY ADMIN-------------------------------
//BANN COMMENT
router.put("/bannComments", admin_controller_1.bannComments);
//-------------------------------------- NODEMAILER------------------------------------------
//SEND SPAM NEW MOVIE 
// router.get("/nodemailer", nodemailerAddMovie)
//SEND SPAM WELCOME EMAILS TO CLIENTS
router.get("/nodemaileru", nodemailer_1.nodemailerCreateUser);
//SEND SPAM THE THE ADMIN BANN SOMEONE
router.get("/nodemailerb", nodemailer_1.nodemailerBannUser);
//UNBANN USER
router.get("/nodemailerun", nodemailer_1.nodemailerUnbannUser);
//---------------------------------------------- PAYPAL ---------------------------------------------------------
//    http://localhost:3000/create-paymentGold [POST]
router.post('/create-paymentGold', paymentGold_controller_1.createPaymentGold);
//PAYMENT
router.get('/execute-paymentGold', paymentGold_controller_1.executePaymentGold);
//    http://localhost:3000/create-paymentSilver[POST]
router.post('/create-paymentSilver', paymentSilver_controller_1.createPaymentSilver);
//PAYMENT
router.get('/execute-paymentSilver', paymentSilver_controller_1.executePaymentSilver);
//CHANGE GOLD
router.put('/apiGold', paymentGold_controller_1.apiGold);
//CHANGE SILVER
router.put('/apiSilver', paymentSilver_controller_1.apiSilver);
//FUNCION PARA SETEAR TOKEN SILVER
router.put("/setTokenSilver", paymentSilver_controller_1.silverToken);
//FUNCION PARA SETEAR TOKEN GOLD
router.put("/setTokenGold", paymentGold_controller_1.goldToken);
exports.default = router;
