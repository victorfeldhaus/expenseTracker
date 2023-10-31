import { prisma } from "../database/client";

export const userExists = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  return user;
};
