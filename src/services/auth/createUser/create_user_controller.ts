import { Request, Response } from "express";
import { userExists } from "../../../utils/user_exists";
import { createUser } from "./create_user";
import { hash } from "bcrypt";

export const createUserController = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof password !== "string"
  )
    return res.status(422).json({ message: "INVALID_DATA" });
  if (password.length < 8) {
    return res.status(400).json({
      message: "Senha muito simples, a senha deve ter no mínimo 8 dígitos",
    });
  }
  try {
    const userExist = await userExists(email);
    if (userExist) {
      return res.status(400).json({ message: "User já existe!" });
    }
    const hasPassword = await hash(password, 8);

    const user = await createUser(email, name, hasPassword);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ message: "SERVER_INTERNAL_ERROR" });
  }
};
