import { Request, Response } from "express";
import { userExists } from "../../../utils/user_exists";
import EnvironmentConfig from "../../../env/envConfig";
import { sign } from "jsonwebtoken";
import { compare } from "bcrypt";
const tokenKey = EnvironmentConfig.getInstance().auth.tokenKey;

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (typeof email !== "string" || typeof password !== "string") {
    return res.status(422).json({ message: "INVALID_DATA" });
  }

  const userExist = await userExists(email);
  if (!userExist) {
    return res.status(401).json({ message: "User ou senha inválidos" });
  }

  const passwordMatch = compare(password, userExist.password);

  if (!passwordMatch) {
    return res.status(401).json({ message: "User ou senha inválidos" });
  }

  const token = sign({}, tokenKey, {
    subject: `${userExist.id}`,
    expiresIn: "1000s",
  });

  return res.status(200).json(token);
};
