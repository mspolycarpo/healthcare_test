import * as express from "express";
import { routes } from "../routers/router";

export const app = express();

app.use(express.json());

// init routes
routes(app);
