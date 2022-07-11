import { orderInput, orderOutput } from "../database/models/orderModels";
import * as repository from "../database/repositories/orderRepositorie";

export const getAll = async (): Promise<orderOutput[]> => {
  return await repository.getAll();
};
export const getById = async (id: number): Promise<orderOutput> => {
    return await repository.getById(id);
}
export const create = async (payload: orderInput): Promise<orderOutput> => {
  return await repository.create(payload);
};
export const updateById = async (id: number, payload: orderInput): Promise<orderOutput> => {
  return await repository.updateById(id, payload);
};
export const deleteById = async (id: number): Promise<void> => {
  await repository.deleteById(id);
}