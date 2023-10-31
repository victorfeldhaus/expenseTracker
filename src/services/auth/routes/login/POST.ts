import { Application } from "express";
import { loginController } from "../../login/login_controller";
import { USER } from "../../../../routes/endpoints.json";

export const loginRoute = (app: Application) => {
  app.post(USER.LOGIN, loginController);
};
