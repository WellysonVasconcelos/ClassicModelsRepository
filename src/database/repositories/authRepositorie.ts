import AppError from "../../utils/appError";
import User, { userAttributes } from "../models/userModel";

export const findById = async ({
  email,
}: userAttributes): Promise<userAttributes> => {
  const user = await User.findByPk(email);
  if (!user) {
    throw new AppError("Not Found", "Usuário não encontrado", 404);
  }

  return user;
};

export const create = async (
  payload: userAttributes
): Promise<userAttributes> => {
  const { email, password } = payload;
  const user = await User.findByPk(email);

  if (user) {
    throw new AppError("UserConflict", "Usuário já existente", 404);
  }
  return await User.create(payload);
};
