import { Application } from "express";
import { expanseRoutes } from "../services/expanse/routes";

export const routes = (app: Application) => {
  expanseRoutes(app);
};
