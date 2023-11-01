import { Application } from "express";
import { privateKey } from "./private_key";
import { auth } from "./auth";

export const middleware = (app: Application) => {
  privateKey(app);
  auth(app);
};
