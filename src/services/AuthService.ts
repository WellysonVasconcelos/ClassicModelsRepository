import { userAttributes } from "../database/models/userModel";
import * as repository from "../database/repositories/authRepositorie";
import AppError from "../utils/appError";
import jwt from "jsonwebtoken";
import { secret } from "../config/auth.config";
import bcrypt from "bcrypt";

export const singUp = async ({
  email,
  password,
}: userAttributes): Promise<{ email: string }> => {
  password = bcrypt.hash(password, 10);
  const user = await repository.create({ email, password });
  return { email: user.email };
};

export const singIn = async ({
  email,
  password,
}: userAttributes): Promise<{ token: string }> => {
  const token = jwt.sing(
    {
      email: email,
    },
    secret,
    { expiresIn: "24h" }
  );
  try {
    const user = await repository.findById(email);
    if (bcrypt.compareSync(password, user.password)) {
      return { token: token };
    } else {
      throw new Error;
    }
  } catch (error) {
    throw new AppError(
      "Unauthorized",
      "Usuário e/ou senha estão incorretos",
      401
    );
  }
};
