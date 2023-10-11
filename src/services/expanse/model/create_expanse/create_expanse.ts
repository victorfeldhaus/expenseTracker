import exp from "constants";
import { dao } from "../../../../database/DAO";

export const createExpanse = async (
  name: string,
  amount: number,
  date: string,
  categoryId: number,
  userId: number
) => {
  const res = dao.insert("expense", {
    description: name,
    amount,
    date,
    categoryId,
    userId,
  });

  return res;
};
