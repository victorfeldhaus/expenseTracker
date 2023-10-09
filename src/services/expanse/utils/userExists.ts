import { dao } from "../../../database/DAO";

export const userExists = async (userId: number) => {
  const res = await dao.select(
    {
      from: "user",
      columns: ["id"],
      where: { id: userId },
    },
    {
      returnMode: "firstValue",
    }
  );
  return res;
};
