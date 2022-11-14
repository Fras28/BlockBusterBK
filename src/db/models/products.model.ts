import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../db";

interface ProductsAttributes {
  id?: number;
  name: string;
  description: string;
  photo: string;
  rated: string;
  price:number;
  status: boolean;
}

class product extends Model<ProductsAttributes> {
  public id?: number;
  public name!: string;
  public description!: string;
  public photo!: string;
  public rated!: string;
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
    photo: {
      type: DataTypes.STRING,
    },
    rated: {
      type: DataTypes.STRING,
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
