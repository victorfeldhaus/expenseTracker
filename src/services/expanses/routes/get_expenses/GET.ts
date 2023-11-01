import { Application } from "express";
import { getExpensesController } from "../../controller/get_expenses/get_expenses";
import { EXPENSE } from "../../../../routes/endpoints.json";

export const getExpensesRoute = (app: Application) => {
  app.get(EXPENSE.GET, getExpensesController);
};
