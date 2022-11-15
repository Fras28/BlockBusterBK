import { Router } from "express";
import { addProduct, fullDbProducts, getProdcutId} from "../controller/products.controller";
import {  addFav,/* addLimit,*/ addUser, deletUser, editUser, listFav } from "../controller/users.controller";
import { fullDBComments, addComment, byIdComments, byIdCommentsUser, deleteComments, editComments } from "../controller/comments.controller"
import {  bannComments, bannUser, editProduct, fullUsers, getUser, newAdmin, newProduct, suspProduct, unBannUser} from "../controller/admin.controller"
// import {apiGold, createPaymentGold, executePaymentGold, goldToken} from "../controller/paymentGold.controller"
// import {apiSilver, createPaymentSilver, executePaymentSilver, silverToken} from "../controller/paymentSilver.controller"
//import { nodemailerBannUser, nodemailerCreateUser, nodemailerUnbannUser } from "../controller/nodemailer";


const router = Router();

//------------------------------------- GETS DE MOVIES--------------------------------

//GET ALL MOVIES
router.get("/",fullDbProducts)

//GET BY ID MOVIES
router.get('/detail/:id', getProdcutId)

//------------------------------------ GETS DE COMMENTS--------------------------------

//GET COMMENT ID USER
router.get("/commentUser", byIdCommentsUser)

//GET COMMENT ID MOVIES
router.get("/comments", byIdComments)

//GET COMMENTS
router.get("/allComments", fullDBComments)

//----------------------------------- POSTS DE COMMENTS--------------------------------

//POST COMMENTS
router.post('/detail/:id', addComment)

//DELETE COMMENT
router.post('/detail', deleteComments)

//DELETE COMMENT
router.put('/editComment', editComments)

//----------------------------------- POSTS/PUT DE USERS--------------------------------

//CREAR USER--> el modelo de users(esta en ds en Info-Back)
router.post('/newU', addUser)

//CREAR USER--> el modelo de users(esta en ds en Info-Back, name, lastname, date)
router.put('/editU', editUser)

//AGREGA FAVORITO
router.post('/addFav', addFav)

//TODOS LOS FAVORITOS
router.get('/allFavs', listFav)

//----------------------------------- GETS DE ADMIN--------------------------------

//GET ALL USERS--> para slect de todos los usuarios
router.get("/users", fullUsers)

//GET USER BY EMAIL--> necesito email por params en string
router.get("/Uemail/:email", getUser)

//----------------------------------- POSTS/PUTS DE ADMIN  PARA USERS--------------------------------

//BANN USER--> necesito id(numerico) por body
router.put("/bannUser", bannUser)

//UNBANN USER--> necesito id(numerico) por body
router.put("/unBannUser", unBannUser)

//CREATE NEW ADMIN--> necesito id(numerico) por body
router.put("/createAdm", newAdmin)

//DELETE USERS 
router.post('/deletUser', deletUser)

//------------------------------------- POSTS/PUTS DE MOVIES BY ADMIN-------------------------------

//SUSPEND MOVIE--> necesito id(numerico) por body
router.put("/removeP", suspProduct)

//POSTS MOVIE--> el modelo de blockbusters(esta en ds en Info-Back)
router.post('/addP', newProduct)

router.put("/editP", editProduct )

// //LIMITER GOLD/SILVER
// router.put("/limiter", addLimit)

//------------------------------------- POSTS/PUTS DE COMMENTS BY ADMIN-------------------------------

//BANN COMMENT
router.put("/bannComments", bannComments)

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



export default router;


