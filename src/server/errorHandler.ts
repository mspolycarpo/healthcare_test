import { Request, Response, NextFunction } from "express";
export const handleError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  switch (err.name) {
    case "SequelizeUniqueConstraintError":
      res
        .status(400)
        .send({ message: "Existem campos em branco, favor verificar" });
      break;
    default:
      next(err);
  }
};
