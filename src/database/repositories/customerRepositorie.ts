import { Op } from "sequelize";
import { Query } from "../../shared/types/query";
import AppError from "../../utils/appError";
import { getPagination } from "../../utils/getPagination";
import Model, { CustomerInput, CustomerOutput } from "../models/customerModel";

export const getAll = async (
  customerName: string,
  limitMin: string,
  limitMax: string,
  query: Query
): Promise<{ rows: CustomerOutput[]; count: number }> => {
  let { size, page, sort, order, ...filters } = query;
  const creditMin = parseInt(limitMin);
  const creditMax = parseInt(limitMax);

  const id = "customerNumber";
  const { ...pagination } = getPagination(id, query);

  if (!customerName) customerName = "";

  return await Model.findAndCountAll({
    where: {
      customerName: { [Op.like]: `${customerName}` },
      creditLimit: { [Op.between]: [limitMin, limitMax] },

      ...filters,
    },
    ...pagination,
  });
};

export const getById = async (id: number): Promise<CustomerOutput> => {
  const customer = await Model.findOne({
    where: {
      customerNumber: id,
    },
    include: { all: true, nested: true },
  });

  if (!customer) {
    throw new AppError("NotFoundError", "Registro não encontrado", 404);
  }
  return customer;
};

export const create = async (
  payload: CustomerInput
): Promise<CustomerOutput> => {
  return await Model.create(payload);
};

export const updateById = async (
  id: number,
  payload: CustomerInput
): Promise<CustomerOutput> => {
  const customer = await Model.findByPk(id);

  if (!customer) {
    throw new AppError("NotFoundError", "Registro não encontrado", 404);
  }

  return await customer.update(payload);
};

export const deleteById = async (id: number): Promise<void> => {
  const customer = await Model.findByPk(id);

  if (!customer) {
    throw new AppError("NotFoundError", "Registro não encontrado", 404);
  }

  return await customer.destroy();
};
