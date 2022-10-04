import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../db";
import blockbuster from "./blockbuster.model";
import users from "./users.model";

interface favMovieAttributes {
  id?: number;
  idMovie: number;
  idUser: number;
}

export interface UsersMovieInput extends Optional<favMovieAttributes, "id"> {}
export interface UserMovieOutput extends UsersMovieInput {}

class favMovies
  extends Model<favMovieAttributes, UsersMovieInput>
  implements favMovieAttributes
{
  public id!: number;
  public idMovie!: number;
  public idUser!: number;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

favMovies.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    idMovie: {
      type: DataTypes.INTEGER,
      references: {
        model: blockbuster,
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

blockbuster.belongsToMany(users,{
  through:favMovies
})
users.belongsToMany(blockbuster,{
  through:favMovies
})

export default favMovies;
