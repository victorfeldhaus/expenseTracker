import { Application } from "express";
import { EXPENSE } from "../../../../routes/endpoints.json";
import { createExpanseController } from "../../controller/create_expanse/create_expanse";

export const createExpanseRoute = (app: Application) => {
  app.post(EXPENSE.CREATE, createExpanseController);
};
