import { json } from "body-parser";
import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../db";

interface UsersAttributes {
  id?: number;
  name: string;
  lastname: string;
  nickname: string;
  picture: string;
  date:string;
  email: string;
  status: boolean;
  category: string;
  token: string;
  limiter?:string;//0 if(category:silver){update(limitador+1) if(limitado >20){(update(category:"user"))}}
  //
}

class users extends Model<UsersAttributes> {
  public id!: number;
  public name!: string;
  public lastname!: string;
  public nickname!: string;
  public picture!: string;
  public email!: string;
  public status!: boolean;         
  public category!: string;
  public token!: string;
  public limiter !:string;


  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    nickname: {
      type: DataTypes.STRING,
    },
    date:{
      type: DataTypes.STRING,
    },
    picture: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.BOOLEAN,
    },
    category: {
      type: DataTypes.STRING,
    },
    token: {
      type: DataTypes.STRING,
    },
    limiter:{
      type: DataTypes.STRING,
    },
  },
  { sequelize: sequelizeConnection, paranoid: true }
);
// season:{
// type: DataTypes.ENUM("summer", "autumn","winter","spring")},
export default users;