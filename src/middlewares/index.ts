import { Application } from "express";
import { bodyParser } from "./body_parse";
import { privateKey } from "./private_key";

export const middleware = (app: Application) => {
  bodyParser(app);
  privateKey(app);
};
