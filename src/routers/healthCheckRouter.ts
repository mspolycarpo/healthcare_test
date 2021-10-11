import { Router, Request, Response, NextFunction } from "express";
import * as controller from "../controllers/healthCheckController";
export const healthCheckRouter = Router();

healthCheckRouter.get("/", controller.check);
