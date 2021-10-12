import { Sequelize } from "sequelize";
import { enviroment } from "../common/enviroment";

export const connection = new Sequelize({
  dialect: "sqlite",
  storage:
    enviroment.application.enviroment === "test" ? ":memory:" : "./myDB.sqlite",
  logging: enviroment.application.enviroment === "prod" ? true : false,
});
