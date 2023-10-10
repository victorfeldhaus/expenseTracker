import { Application } from "express";
import { createExpanseRoute } from "./create_expanse/POST";

export const expanseRoutes = (app: Application) => {
  createExpanseRoute(app);
};
