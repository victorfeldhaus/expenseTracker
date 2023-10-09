import { Request, Response } from "express";
import { createExpanse } from "../model/create_expanse";
import { userExists } from "../utils/userExists";

export const create_expanse = async (req: Request, res: Response) => {
  const { name, amount, date, categoryId, userId } = req.body;
  if (
    typeof name !== "string" ||
    amount !== "number" ||
    date !== "string" ||
    categoryId !== "string" ||
    !userExists(userId)
  )
    return res.status(400).json({ message: "Invalid body" });

  const expanse = await createExpanse(name, amount, date, categoryId, userId);

  if (!expanse) return res.status(500).json({ message: "Internal error" });

  return res.status(201).json({ message: "Expanse created" });
};
