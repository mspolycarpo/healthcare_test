import { Request, Response, NextFunction } from "express";
import { enviroment } from "../common/enviroment";

export const check = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).send({
    version: enviroment.application.version,
    enviroment: enviroment.application.enviroment,
    message: "Estou UP!",
    name: enviroment.application.name,
  });
};
