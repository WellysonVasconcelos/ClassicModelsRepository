import { Op } from "sequelize";
import AppError from "../../utils/appError";
import Order from "../models/orderModels";
import Model, { productsInput, productsOutput } from "../models/productsModel";

export const getAll = async (
  limitMax: string,
  limitMin: string
): Promise<productsOutput[]> => {
  const qntdLimitMin = parseInt(limitMin);
  const qntdLimitMax = parseInt(limitMax);
  return await Model.findAll({
    where: {
      quantityInStock: { [Op.between]: [qntdLimitMin, qntdLimitMax] },
    },
  });
};

export const getById = async (id: string): Promise<productsOutput> => {
  const products = await Model.findOne({
    where: {
      productCode: id,
    },
    include: Order,
  });

  if (!products) {
    throw new AppError("NotFoundError", "Registro não encontrado", 404);
  }
  return products;
};

export const create = async (
  payload: productsInput
): Promise<productsOutput> => {
  return await Model.create(payload);
};

export const updateById = async (
  id: string,
  payload: productsInput
): Promise<productsOutput> => {
  const products = await Model.findByPk(id);

  if (!products) {
    throw new AppError("NotFoundError", "Registro não encontrado", 404);
  }

  return await products.update(payload);
};

export const deleteById = async (id: string): Promise<void> => {
  const products = await Model.findByPk(id);

  if (!products) {
    throw new AppError("NotFoundError", "Registro não encontrado", 404);
  }

  return await products.destroy();
};
