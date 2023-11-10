import{ Sequelize } from "sequelize";
import { DB_Name } from "../constants.js";


const connectDB = new Sequelize(`${process.env.URL}/${DB_Name}`, {
  username: process.env.USER_NAME,
  password: process.env.PASSWORD,
});


export default connectDB;
