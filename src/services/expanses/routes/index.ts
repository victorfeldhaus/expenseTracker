import { Application } from "express";
import { createExpanseRoute } from "./create_expanse/POST";
import { getExpensesRoute } from "./get_expenses/GET";

export const expanseRoutes = (app: Application) => {
  createExpanseRoute(app);
  getExpensesRoute(app);
};
