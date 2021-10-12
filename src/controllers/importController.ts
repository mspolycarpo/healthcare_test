import { Request, Response, NextFunction } from "express";
import * as dao from "../daos/importDao";
export const bulkCreate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await dao.bulkCreate(req.body);
    res.status(201).send({ msg: "Importação finalizada com sucesso" });
  } catch (e) {
    next(e);
  }
};

export const listAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await dao.listAll();
    res.send(data);
  } catch (e) {
    next(e);
  }
};
