import { prisma } from "../../../database/client";

export const createUser = async (
  email: string,
  name: string,
  password: string
) => {
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });
  return user;
};
