import { Request, Response } from "express";
import { createExpanse } from "../../model/create_expanse/create_expanse";
import { userExists } from "../../utils/userExists";

export const createExpanseController = async (req: Request, res: Response) => {
  const { name, amount, date, categoryId, userId } = req.body;
  if (!(await userExists(userId))) {
    return res.status(401).json({ message: "NÃO AUTORIZADO" });
  }
  if (
    typeof name !== "string" ||
    typeof amount !== "number" ||
    typeof date !== "string" ||
    typeof categoryId !== "number"
  ) {
    return res.status(422).json({ message: "UNPROCESSITY" });
  }

  const formattedDate = new Date(date.split("/").reverse().join("/"));
  const expanse = await createExpanse(
    name,
    amount,
    formattedDate,
    categoryId,
    userId
  );

  if (!expanse)
    return res.status(500).json({ message: "SERVER_INTERAL_ERROR" });

  return res.status(201).json({ message: "SUCCESS" });
};
