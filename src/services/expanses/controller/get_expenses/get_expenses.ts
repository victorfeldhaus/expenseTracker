import { Request, Response } from "express";
import { userExists } from "../../utils/userExists";
import { prisma } from "../../../../database/client";
import { getExpenses } from "../../model/get_expenses/get_expenses";

export const getExpensesController = async (req: Request, res: Response) => {
  const { userId } = req.params;

  if (!(await userExists(parseInt(userId)))) {
    return res.status(401).json({ message: "NÃO AUTORIZADO" });
  }

  try {
    const expenses = await getExpenses(parseInt(userId));
    return res.status(200).json({
      data: expenses,
    });
  } catch (error) {
    return res.status(500).json({ message: "SERVER_INTERNAL_ERROR" });
  }
};
