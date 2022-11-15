import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../db";

interface ProductsAttributes {
  id?: number;
  name: string;
  description: string;
  size?:number[];
  color?:string[];
  photo: string[];
  rated: number;
  price:number;
  status: boolean;
}

class product extends Model<ProductsAttributes> {
  public id?: number;
  public name!: string;
  public description!: string;
  public size?:number[];
  public color?:string[];
  public photo!:string[];
  public rated!: number;
  public price!:number;
  public status!: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    color:{
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    size:{
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    photo: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    rated: {
      type: DataTypes.DECIMAL,
    },
    price:{
      type: DataTypes.DECIMAL,
    },
    status: {
      type: DataTypes.BOOLEAN,
    }
  },
  { sequelize: sequelizeConnection, paranoid: true }
);

export default product;
