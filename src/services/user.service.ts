import { strict } from "assert";
import { where } from "sequelize";
import favMovies from "../db/models/favMovies";
import users from "../db/models/users.model";


export type User = {
  id?: number;
  name: string;
  lastname: string;
  nickname: string;
  picture: string;
  date: string;
  email: string;
  status: boolean;
  category: string;
  token: string;
  limiter?: string;
};

export type Fav = {
  id?: number;
  idUser: number;
  idMovie: number;
};

export class UserService {
  constructor(private userModel: users) {}
  //-------------Crear Usuario --------

  async insertUser(user: User) {
    user.status = true;
    user.category = "user";
    console.log(user);
    const insertedUser = await users.create(user, { validate: true });
    return insertedUser;
  }

  async defineCategoryGold(id: number) {
    let userX = await users.update({ category: "gold" }, { where: { id } });
    return userX;
  }

  async defineCategoryGoldToken(id: number, token: string) {
    let userX = await users.update({ token },{ where: { id } });
    return userX;
  } 

  async defineCategorySilver(id: number) {
    let userX = await users.update({ category: "silver" }, { where: { id } });
    return userX;
  } 

  async defineCategorySilverToken(id: number, token: string) {
    let userX = await users.update({ token },{ where: { id } });
    return userX;
  } 

  async defineCategoryUser(id: number) {
    let userX = await users.update({ category: "user" }, { where: { id } });

    return userX;
  }

  async deletUser(id: number) {
    let deletUser = users.destroy({ where: { id } });
    return deletUser;
  }

  async changePic(name: string, date:string,lastname: string, id: number) {
    let userX = await users.update({ name, lastname, date }, { where: { id } });
    return userX;
  }

  async getUserId(id: number) {
    let userX = await users.findOne({ where: { id } });
    return userX;
  }

  async getAllUsersEmail() {
    let emailUser = await users.findAll();
    let mapMail = emailUser.map((e) => e.email);
    return mapMail;
  }

  async newFav(idMovie: number, idUser: number) {
    let newARR: Array<Fav> = await favMovies.findAll({ where: { idUser } });
    let arrFav = newARR.filter((e) => e.idMovie === idMovie);
    const ojbeto = { idMovie, idUser };
    if (!arrFav.length) {
      const lista = await favMovies.create(ojbeto, { validate: true });
      return lista;
    }
    if (arrFav.length) {
      let arrNoFav = await favMovies.destroy({ where: { id: arrFav[0].id } });
      return arrNoFav;
    } else throw new Error();
  }

  async listFav() {
    const listMovies = await favMovies.findAll();
    return listMovies;
  }

  async limiter(id: number, idMovie: string) {
    const userX = await users.findAll({ where: { id } });
    if (userX[0].category === "silver") {
      const limi = userX[0].limiter;
      const rta = limi + "," + idMovie;
      await users.update({ limiter: rta }, { where: { id } });
      if (userX[0].limiter.slice(0, 19)) {
        await users.update({ category: "user" }, { where: { id } });
       await users.update({ limiter: "" }, { where: { id } });
       const userX1 = await users.findAll({ where: { id } });
       return userX1[0];
      }
      return userX[0];
    }
    if (userX[0].category === "gold") {
      const limi = userX[0].limiter;
      const rta = limi + "," + idMovie;
      await users.update({ limiter: rta }, { where: { id } });
      if (userX[0].limiter.slice(0, 39)) {
        await users.update({ category: "user" }, { where: { id } });
       await users.update({ limiter: "" }, { where: { id } });
       const userX1 = await users.findAll({ where: { id } });
       return userX1[0];
      }
      return userX[0];
    } else {
      throw new Error();
    }
  }
}
