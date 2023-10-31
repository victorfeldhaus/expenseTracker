import { Application } from "express";
import { expanseRoutes } from "../services/expanse/routes";
import { authRoutes } from "../services/auth/routes";

export const routes = (app: Application) => {
  expanseRoutes(app);
  authRoutes(app);
};
