import Products from "../db/models/products.model";
import Users from "../db/models/users.model";
import Comments from "../db/models/coments.model";

import ProductM from "../db/models/products.model";
import { where } from "sequelize";

export type Product = {
  id?: number;
  name: string;
  description: string;
  size?: number[];
  color?: string[];
  photo: string[];
  rated: number;
  price: number;
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
    console.log(findInDb);
    if (!findInDb) {
      return await Products.create(product, { validate: true });
    }
    console.log("llegamos aca");
    throw Error;
  }

  async statusProduct(id: number) {
    const productInfo = await Products.findAll({ where: { id } });
    if (productInfo[0].status === true) {
      const byeProduct = await Products.update(
        { status: false },
        { where: { id } }
      );
      return !!byeProduct;
    } else {
      const byeProduct = await Products.update(
        { status: true },
        { where: { id } }
      );
      return !!byeProduct;
    }
  }

  //  name: string;
  //   description: string;
  //   photo: string;
  //   rated: string;
  async modifierProduct(stat: string, element: string | number, id: number) {
    const ojetEdit = await ProductM.findOne({ where: { id } });
    if (ojetEdit) {
      if (typeof element === "string") {
        if (stat === "name") {
          let articleX = await ProductM.update(
            { name: element },
            { where: { id } }
          );
          return articleX;
        }
        if (stat === "description") {
          let articleX = await ProductM.update(
            { description: element },
            { where: { id } }
          );
          return articleX;
        }
        if (stat === "photo") {
          let newArrP: string[] = [];
          newArrP.push(element);
          let articleX = await ProductM.update(
            { photo: [...ojetEdit.photo, ...newArrP] },
            { where: { id } }
          );
          return articleX;
        }
        if (stat === "color") {
          let newArrC: string[] = [];
          newArrC.push(element);
          if (ojetEdit.color) {
            let articleX = await ProductM.update(
              { color: [...ojetEdit.color, ...newArrC] },
              { where: { id } }
            );
            return articleX;
          }
          let articleX = await ProductM.update(
            { color: newArrC },
            { where: { id } }
          );
          return articleX;
        }
      }
      if (typeof element === "number") {
        if (stat === "rated") {
          let articleX = await ProductM.update(
            { rated: element },
            { where: { id } }
          );
          return articleX;
        }
        if (stat === "price") {
          let articleX = await ProductM.update(
            { price: element },
            { where: { id } }
          );
          return articleX;
        }
        if (stat === "size") {
          let newArrS: number[] = [];
          newArrS.push(element);
          if (ojetEdit.size) {
            let articleX = await ProductM.update(
              { size: [...ojetEdit.size, ...newArrS] },
              { where: { id } }
            );
            return articleX;
          }
          let articleX = await ProductM.update(
            { size: newArrS },
            { where: { id } }
          );
          return articleX;
        }
      }
    }
  }

  async defineAdmin(id: number) {
    let userX = await Users.update({ category: "admin" }, { where: { id } });
    return userX;
  }

  async editeName(id: number, string: string) {
    let editName = await Products.update({ name: string }, { where: { id } });
    return editName;
  }

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
