import { Request, Response } from "express";
import users from "../db/models/users.model";
import { UserService } from "../services/user.service";

export const usersService = new UserService(new users());

//CREAR USUARIO
export const addUser = async (req: Request, res: Response) => {
  console.log(req);
  try {
    const dbUser = await usersService.insertUser(req.body);
    console.log(dbUser);
    return res.status(200).send(dbUser);
  } catch (e) {
    return res.status(400).send(e);
  }
};

// export const addLimit = async (req: Request, res: Response)=>{
//   const {id, idMovie} = req.body;
//   try{
//     await usersService.limiter(id, idMovie);
//     res.status(200).send('+1 limiter Movie ❤️')
//   }catch{
//     res.status(400).send('Your limit exceeded 💔 ')
//   }
// };

export const deletUser = async (req: Request, res: Response) => {
  const {id} = req.body;
  try{
    await usersService.deletUser(id);
    res.status(200).send("User deleted successfully");
  }catch(e){
    res.status(400).send("User not found");
  }
};

//POSTA PARA CAMBIO DE FOTO
export const editUser = async (req: Request, res: Response) => {
  const { name, lastname, date, id } = req.body;
  try {
    let editUser = await usersService.changePic(name,date, lastname, id);
    let edited = await usersService.getUserId(id)
    res.status(200).send(edited);
  } catch (e) {
    res.status(404).send("Something went wrong with your change👎​");
  }
};

export const addFav = async(req: Request, res: Response) => {
  const {idMovie,idUser} = req.body;
  try{
    const newFav = await usersService.newFav(idMovie,idUser)
    res.status(200).send(newFav)
  }catch(e){
    res.status(404).send("bad request")
  }
};

export const listFav = async(req: Request, res: Response) => {
 try{const allFavList = await usersService.listFav()
  return res.status(200).send(allFavList)
} catch(e){
    res.status(404).send("Empty fav list")
  }
};

