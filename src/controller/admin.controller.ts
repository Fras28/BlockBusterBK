import users from "../db/models/users.model";
import { Request, Response } from "express";
import { AdminService } from "../services/admin.service";

const adminService = new AdminService(new users());

//Bannear usuariooo
export const bannUser = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    let user = await adminService.getUserById(id);
    console.log(user);
    if (user != null) {
      await adminService.bannUser(id);
      res.status(200).send("User banned successfully!");
    } else {
      res.status(404).send("User not found");
    }
  } catch (e) {
    res.status(404).send(e);
  }
};

//Unbann usuario
export const unBannUser = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    let user = await adminService.getUserById(id);
    console.log(user);
    if (user != null) {
      await adminService.unnBanUser(id);
      res.status(200).send("User unbanned successfully!");
    } else {
      res.status(404).send("User not found");
    }
  } catch (e) {
    res.status(404).send(e);
  }
};

//Crear nuevo administrador
export const newAdmin = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    let user = await adminService.getUserById(id);
    console.log(user);
    if (user != null) {
      await adminService.defineAdmin(id);
      res.status(200).send(`new admin id=${id}`);
    } else {
      res.status(404).send(`Something went wrong! Try again.`);
    }
  } catch (e) {
    res.status(404).send(e);
  }
};

//Crear nueva pelicula
export const newProduct = async (req: Request, res: Response) => {
  const infoNewMovie = req.body;
  try {
    await adminService.addProduct(infoNewMovie);
    res.status(200).send(`movie: ${infoNewMovie.name}  added successfully👍`);
  } catch (e) {
    res.status(400).send("something went rong whit this Prodcut, or already exists ");
  }
};

export const editProduct = async(req:Request, res:Response)=>{
  const { stat, element, id } = req.body;
  try {
    if(element.typeof === "string"){
    await adminService.modifierProduct(stat, element, id);
    res.status(200).send(`the product was successfully modified`);}
    else {await adminService.changePrice(element, id)
    res.status(200).send(`the product price was successfully modified`);}
  } catch (e) {
    res.status(400).send("something went rong whit this Prodcut, or already exists ");
  }
}
//suspender pelicula
export const suspProduct = async (req: Request, res: Response) => {
  const  {id}  = req.body;
  console.log(id);
  try {
    await adminService.statusProduct(id);
    res.status(200).send("The article was Updated");
  } catch (e) {
    res.status(400).send("Something went rong whit this article ​​");
  }
};

//Busca todos los usuarios
export const fullUsers = async (req: Request, res: Response) => {
  try {
    const usersArr = await adminService.allUsers();
    res.status(200).send(usersArr);
  } catch (e) {
    res.status(404).send("No users in DB ");
  }
};

//Busca user por email
export const getUser = async (req: Request, res: Response) => {
  const { email } = req.params;
  try {
    let user = await adminService.getUserByEmail(email);
    res.status(200).send(user);
  } catch (e) {
    res.status(404).send("User not found");
  }
};

// Bann comments
export const bannComments = async (req: Request, res: Response) => {
  const { idUser } = req.body;
  console.log(idUser)
  try {
    let bannedComment = await adminService.bannComment(idUser);
    res.status(200).send(bannedComment);
  } catch (e) {
    res.status(404).send("User not found");
  }
};



