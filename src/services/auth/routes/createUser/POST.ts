import { Application } from "express";
import { createUserController } from "../../createUser/create_user_controller";
import { USER } from "../../../../routes/endpoints.json";

export const createUserRoute = (app: Application) => {
  app.post(USER.CREATE, createUserController);
};
