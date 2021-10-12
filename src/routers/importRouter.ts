import { Router } from "express";
import * as controller from "../controllers/importController";
export const importRouter = Router();

importRouter.post("/fromCSV", controller.bulkCreate);
importRouter.get("/", controller.listAll);
