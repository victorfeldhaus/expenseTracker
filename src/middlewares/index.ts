import { Application } from "express";
import { bodyParser } from "./body_parse";

export const middleware = (app: Application) => {
  bodyParser(app);
};
