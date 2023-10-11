import { Request, Response } from "express";
import { createExpanse } from "../../model/create_expanse/create_expanse";
import { userExists } from "../../utils/userExists";

export const createExpanseController = async (req: Request, res: Response) => {
  const { name, amount, date, categoryId, userId } = req.body;
  if (
    typeof name !== "string" ||
    typeof amount !== "number" ||
    typeof date !== "string" ||
    typeof categoryId !== "number" ||
    !(await userExists(userId))
  )
    return res.status(400).json({ message: "UNPROCESSITY" });

  const expanse = await createExpanse(name, amount, date, categoryId, userId);

  if (!expanse)
    return res.status(500).json({ message: "SERVER_INTERAL_ERROR" });

  return res.status(201).json({ message: "SUCCESS" });
};
