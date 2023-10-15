import { Application } from "express";
import EnvionmentConfig from "../env/envConfig";

export const privateKey = (app: Application) => {
  app.use((req, res, next) => {
    const authKey = req.headers["private-key"];

    if (authKey === EnvionmentConfig.getInstance().app.privateKey) {
      next();
    } else {
      res.status(401).json({ message: "UNAUTORIZED" });
    }
  });
};
