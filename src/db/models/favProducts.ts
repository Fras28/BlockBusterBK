import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../db";
import products from "./products.model";
import users from "./users.model";

interface favProductsAttributes {
  id?: number;
  idProduct: number;
  idUser: number;
}

export interface UsersProductInput extends Optional<favProductsAttributes, "id"> {}
export interface UsersProductOutput extends UsersProductInput {}

class favProducts
  extends Model<favProductsAttributes, UsersProductInput>
  implements favProductsAttributes
{
  public id!: number;
  public idProduct!: number;
  public idUser!: number;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

favProducts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
   idProduct: {
      type: DataTypes.INTEGER,
      references: {
        model: products,
        key: "id",
      },
    },
    idUser: {
      type: DataTypes.INTEGER,
      references: {
        model: users,
        key: "id",
      },
    },
  },
  {
    sequelize: sequelizeConnection,
    paranoid: true,
  }
);

products.belongsToMany(users,{
  through:favProducts
})
users.belongsToMany(products,{
  through:favProducts
})

export default favProducts;
