import Products from "../db/models/products.model";
import Users from "../db/models/users.model";
import Comments from "../db/models/coments.model";
import favMovies from "../db/models/favProducts";
import ProductM from "../db/models/products.model";
import { where } from "sequelize";

export type Product = {
  id?: number;
  name: string;
  description: string;
  photo: string;
  rated: string;
  status: boolean;  
};


export type Adm = "admin";

export type User = {
  id?: number;
  name: string;
  lastname: string;
  nickname: string;
  date?: string;
  picture: string;
  email: string;
  status: boolean;
  category: Adm;
};

export type Comment = {
  id?: number;
  movieId: number;
  idUser: number;
  name: string;
  coment: string;
  picture: string;
  status: boolean;
};

export class AdminService {
  constructor(private UserModel: Users) {}

  async bannUser(id: number) {
    let userX = await Users.update({ status: false }, { where: { id } });
    return userX;
  }

  async unnBanUser(id: number) {
    let userX = await Users.update({ status: true }, { where: { id } });
    return userX;
  }

  async addProduct(product: Product) {
    const findInDb = await Products.findOne({ where: { name: product.name } });
    console.log(findInDb)
    if (!findInDb) {
      return await Products.create(product, { validate: true });
    }
    throw Error;
  }

  async statusProduct(id: number) {
    const productInfo= await Products.findAll({ where: { id } });
    if (productInfo[0].status === true) {
      const byeProduct = await Products.update(
        { status:false },
        { where: { id } }
      );
      return !!byeProduct;
    } else {
      const byeProduct = await Products.update(
        { status:true },
        { where: { id } }
      );
      return !!byeProduct;
    }
  }

//  name: string;
//   description: string;
//   photo: string;
//   rated: string;
  async modifierProduct(stat:string, element:string ,id:number){
    if(stat === "name"){
 await ProductM.update({ name: element }, { where: { id } });
    }
    if(stat === "description"){
      let userX = await ProductM.update({ description: element }, { where: { id } });
      return userX;
    }
    if(stat === "photo"){
      let userX = await ProductM.update({ photo: element }, { where: { id } });
      return userX;
    }
    if(stat === "rated"){
      let userX = await ProductM.update({ rated: element }, { where: { id } });
      return userX;
    }
  }

  async defineAdmin(id: number) {
    let userX = await Users.update({ category: "admin" }, { where: { id } });
    return userX;
  }

  async editeName(id: number, string: string) {
    let editName = await Products.update(
      { name: string },
      { where: { id } }
    );
    return editName;
  }

  // async editeYear(id: number, string: string) {
  //   let editName = await Products.update(
  //     { year: string },
  //     { where: { id } }
  //   );
  //   return editName;
  // }

  async editePoster(id: number, string: string) {
    let editName = await Products.update(
      { photo: string },
      { where: { id } }
    );
    return editName;
  }

  // async editeGenre(id: number, string: string) {
  //   let editName = await Blockbuster.update(
  //     { genre: string },
  //     { where: { id } }
  //   );
  //   return editName;
  // }

  // async editeCountry(id: number, string: string) {
  //   let editName = await Blockbuster.update(
  //     { country: string },
  //     { where: { id } }
  //   );
  //   return editName;
  // }

  async editeRated(id: number, string: string) {
    let editName = await Products.update(
      { rated: string },
      { where: { id } }
    );
    return editName;
  }

  // async editeReleased(id: number, string: string) {
  //   let editName = await Blockbuster.update(
  //     { released: string },
  //     { where: { id } }
  //   );
  //   return editName;
  // }

  // async editeRuntime(id: number, string: string) {
  //   let editName = await Blockbuster.update(
  //     { runtime: string },
  //     { where: { id } }
  //   );
  //   return editName;
  // }

  // async editeDirector(id: number, string: string) {
  //   let editName = await Blockbuster.update(
  //     { director: string },
  //     { where: { id } }
  //   );
  //   return editName;
  // }

  // async editeActors(id: number, string: string) {
  //   let editName = await Blockbuster.update(
  //     { actors: string },
  //     { where: { id } }
  //   );
  //   return editName;
  // }

  // async editePlot(id: number, string: string) {
  //   let editName = await Blockbuster.update(
  //     { plot: string },
  //     { where: { id } }
  //   );
  //   return editName;
  // }

  // async editeLanguage(id: number, string: string) {
  //   let editName = await Blockbuster.update(
  //     { language: string },
  //     { where: { id } }
  //   );
  //   return editName;
  // }

  // async editeimdbVotes(id: number, string: string) {
  //   let editName = await Blockbuster.update(
  //     { imdbVotes: string },
  //     { where: { id } }
  //   );
  //   return editName;
  // }

  // async editeimdbRating(id: number, string: string) {
  //   let editName = await Blockbuster.update(
  //     { imdbRating: string },
  //     { where: { id } }
  //   );
  //   return editName;
  // }

  async getUserByEmail(email: string) {
    let emailUser = await Users.findOne({ where: { email } });
    return emailUser;
  }

  async allUsers() {
    let arrUsers = await Users.findAll();
    arrUsers.sort((a, b) => {
      if (a.nickname < b.nickname) {
        return 1;
      }
      if (b.nickname < a.nickname) {
        return -1;
      }
      return 0;
    });
    return arrUsers;
  }

  async getUserById(id: number) {
    let idUser = await Users.findOne({ where: { id } });
    return idUser;
  }

  async bannComment(idUser: number) {
    let bann = await Comments.update({ status: false }, { where: { idUser } });
    return bann;
  }

}
