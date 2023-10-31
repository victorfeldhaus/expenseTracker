import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import EnvironmentConfig from "../env/envConfig";

const tokenKey = EnvironmentConfig.getInstance().auth.tokenKey;

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const { auth } = req.headers;
  console.log(auth);
  if (!auth) {
    return res.status(401).json({ message: "INVALID_TOKEN" });
  }

  try {
    const isValidToken = verify(auth, tokenKey);
    next();
  } catch (error) {}
};
