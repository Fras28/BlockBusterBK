import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../db";
import comments from "./coments.model";
import users from "./users.model";

interface UsersCommentsAttributes {
  id?: number;
  commentsId: number;
  usersId: number;
}

export interface UsersCommentsInput
  extends Optional<UsersCommentsAttributes, "id"> {}
export interface UsersCommentsOutput extends UsersCommentsInput {}

class usersComments
  extends Model<UsersCommentsAttributes, UsersCommentsInput>
  implements UsersCommentsAttributes
{
  public id!: number;
  public commentsId!: number;
  public usersId!: number;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

usersComments.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    commentsId: {
      type: DataTypes.INTEGER,
      references: {
        model: comments,
        key: "id",
      },
    },
    usersId: {
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

export default usersComments;
