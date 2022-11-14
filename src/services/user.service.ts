import { strict } from "assert";
import { where } from "sequelize";
import favMovies from "../db/models/favProducts";
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

  // async defineCategoryGold(id: number) {
  //   let userX = await users.update({ category: "gold" }, { where: { id } });
  //   return userX;
  // }

  async defineCategoryGoldToken(id: number, token: string) {
    let userX = await users.update({ token }, { where: { id } });
    return userX;
  }

  // async defineCategorySilver(id: number) {
  //   let userX = await users.update({ category: "silver" }, { where: { id } });
  //   return userX;
  // }

  async defineCategorySilverToken(id: number, token: string) {
    let userX = await users.update({ token }, { where: { id } });
    return userX;
  }

  // async defineCategoryUser(id: number) {
  //   let userX = await users.update({ category: "user" }, { where: { id } });
  //   return userX;
  // }

  async deletUser(id: number) {
    let deletUser = users.destroy({ where: { id } });
    return deletUser;
  }

  async changePic(name: string, date: string, lastname: string, id: number) {
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
  async newFav(idProduct: number, idUser: number) {
    let movie = await favMovies.findOne({ where: { idUser, idProduct } });
    if (!movie) {
      const lista = await favMovies.create(
        { idProduct, idUser },
        { validate: true }
      );
      return lista;
    }
    if (movie) {
      let arrNoFav = await movie.destroy()
      return arrNoFav;
    } 
  }

  async listFav() {
    const listMovies = await favMovies.findAll();
    return listMovies;
  }

  // async limiter(id: number, idMovie: number) {
  //   const userX = await users.findAll({ where: { id } });
  //   let limi = userX[0].limiter;
  //   let array = [];
  //   let rta;
  //   if (userX[0].category === "silver") {
  //     if (limi === "" || limi === null) {
  //       limi = idMovie.toString();
  //       await users.update({ limiter: limi }, { where: { id } });
  //     } else {
  //       rta = limi + "," + idMovie;
  //       array.push(rta);
  //       let array1 = array[0].split(",");
  //       console.log(array1, "aca estoy array1");
  //       const data = new Set(array1);
  //       let allMovie = [...data];
  //       console.log(allMovie, "aca all");
  //       console.log("aca andamos", allMovie);
  //       if (allMovie.length > 20) {
  //         throw new Error();
  //       }
  //       let data1 = allMovie.toString();
  //       await users.update({ limiter: data1 }, { where: { id } });
  //       //let result = limi.split(",");
  //       console.log("aca andamos", allMovie);
  //       if (allMovie.length > 20) {
  //         throw new Error();
  //       }
  //     }
  //     return userX[0];
  //   } 
  //   else {
  //     const userx = users.findAll({ where: { id } });
  //     console.log(`Hey ${userX} Your plan expired`);
  //   }

  //   //gold

  //   if (userX[0].category === "gold") {
  //     if (limi === "" || limi === null) {
  //       limi = idMovie.toString();
  //       await users.update({ limiter: limi }, { where: { id } });
  //     } else {
  //       rta = limi + "," + idMovie;
  //       array.push(rta);
  //       let array1 = array[0].split(",");
  //       console.log(array1, "aca estoy array1");
  //       const data = new Set(array1);
  //       let allMovie = [...data];
  //       console.log(allMovie, "aca all");
  //       console.log("aca andamos", allMovie);
  //       if (allMovie.length > 40) {
  //         throw new Error();
  //       }
  //       let data1 = allMovie.toString();
  //       await users.update({ limiter: data1 }, { where: { id } });
  //       //let result = limi.split(",");
  //       console.log("aca andamos", allMovie);
  //       if (allMovie.length > 40) {
  //         throw new Error();
  //       }
  //     }
  //     return userX[0];
  //   }
  //   else {
  //     const userx = users.findAll({ where: { id } });
  //     console.log(`Hey ${userX} Your plan expired`);
  //   }
  // }
}
