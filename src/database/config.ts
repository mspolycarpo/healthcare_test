import { Sequelize } from "sequelize";
import { enviroment } from "../common/enviroment";

export const connection = new Sequelize(enviroment.database.url, {
  logging: enviroment.application.enviroment === "prod" ? true : false,
});
