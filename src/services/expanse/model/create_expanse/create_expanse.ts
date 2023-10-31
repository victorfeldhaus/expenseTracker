import exp from "constants";
import { prisma } from "../../../../database/client";

export const createExpanse = async (
  name: string,
  amount: number,
  date: string,
  categoryId: number,
  userId: number
) => {
  const res = await prisma.expense.create({
    data: {
      description: name,
      amount,
      date,
      categoryId,
      userId,
    },
  });

  return res;
};
