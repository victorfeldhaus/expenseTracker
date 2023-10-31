import { Application } from "express";
import { createUserRoute } from "./createUser/POST";
import { loginRoute } from "./login/POST";

export const authRoutes = (app: Application) => {
  createUserRoute(app);
  loginRoute(app);
};
