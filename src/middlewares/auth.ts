import { Application, NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import EnvironmentConfig from "../env/envConfig";

const tokenKey = EnvironmentConfig.getInstance().auth.tokenKey;

export const auth = async (app: Application) => {
  app.use(async (req, res, next) => {
    const { auth } = req.headers;
    if (typeof auth !== "string") {
      return res.status(401).json({ message: "INVALID_TOKEN" });
    }
    if (!auth) {
      return res.status(401).json({ message: "INVALID_TOKEN" });
    }

    try {
      await verify(auth, tokenKey);
      next();
    } catch (error) {
      return res.status(401).json({ message: "INVALID_TOKEN" });
    }
  });
};
