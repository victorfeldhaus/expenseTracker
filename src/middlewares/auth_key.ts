import { Application } from "express";
import EnvionmentConfig from "../env/envConfig";

export const authKey = (app: Application) => {
  app.use((req, res, next) => {
    const authKey = req.headers["auth"];

    if (authKey === EnvionmentConfig.getInstance().app.privateKey) {
      next();
    } else {
      res.status(401).json({ message: "UNAUTORIZED" });
    }
  });
};
