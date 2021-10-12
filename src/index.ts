import { Sequelize } from "sequelize";
import { enviroment } from "./common/enviroment";
import { app } from "./server/server";

const listener = app.listen(enviroment.server.port);
console.log(listener.address());
