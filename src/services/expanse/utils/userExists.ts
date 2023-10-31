import { prisma } from "../../../database/client";

export const userExists = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  return user;
};
