import { urlencoded } from "body-parser";
import { Application, Router } from "express";
import { healthCheckRouter } from "./healthCheckRouter";
import { importRouter } from "./importRouter";

const _routes: [string, Router][] = [
  ["/healthCheck", healthCheckRouter],
  ["/import", importRouter],
];

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, router] = route;
    app.use(url, router);
  });
};
