import { Application } from "express";
import { expanseRoutes } from "../services/expanses/routes";

export const routes = (app: Application) => {
  expanseRoutes(app);
};
