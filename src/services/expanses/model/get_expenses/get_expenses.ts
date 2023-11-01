import { prisma } from "../../../../database/client";

export const getExpenses = async (userId: number) => {
  const expenses = await prisma.expense.findMany({
    where: {
      userId: userId,
    },
  });
  return expenses;
};
