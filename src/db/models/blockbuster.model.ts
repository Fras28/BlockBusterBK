import { DataType, DataTypes, Model, ModelStatic, Optional } from "sequelize";
import sequelizeConnection from "../db";


interface BlockbusterAttributes {
  id?: number;
  name: string;
  year: string;
  genre: string;
  poster: string;
  rated: string;
  released: string;
  runtime: string;
  director: string;
  actors: string;
  plot: string;
  language: string;
  country: string;
  imdbVotes: string;
  imdbRating: string;
  status:boolean;
}

class blockbuster extends Model<BlockbusterAttributes> {
  public id!: number;
  public name!: string;
  public year!: string;
  public genre!: string;
  public poster!: string;
  public rated!: string;
  public released!: string;
  public runtime!: string;
  public director!: string;
  public actors!: string;
  public plot!: string;
  public language!: string;
  public country!: string;
  public imdbVotes!: string;
  public imdbRating!: string;
  public status!: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

blockbuster.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    year: {
      type: DataTypes.STRING,
    },
    genre: {
      type: DataTypes.STRING,
    },
    poster: {
      type: DataTypes.STRING,
    },
    rated: {
      type: DataTypes.STRING,
    },
    released: {
      type: DataTypes.STRING,
    },
    runtime: {
      type: DataTypes.STRING,
    },
    director: {
      type: DataTypes.STRING,
    },
    actors: {
      type: DataTypes.STRING,
    },
    language: {
      type: DataTypes.STRING,
    },
    plot: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    imdbVotes: {
      type: DataTypes.STRING,
    },
    imdbRating: {
      type: DataTypes.STRING,
    },
    status:{
      type:DataTypes.BOOLEAN,
    }
  },
  { sequelize: sequelizeConnection, paranoid: true }
);

export default blockbuster;
