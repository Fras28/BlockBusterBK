import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const dbName = process.env.DB_NAME as string ;
const dbUser = process.env.DB_USER as string ;
const dbHost = process.env.DB_HOST ;
const dbPassword = process.env.DB_PASSWORD ;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: "postgres",
  logging: false,
});
// console.log(sequelize)
export default sequelize;