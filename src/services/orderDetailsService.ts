import { orderDetailsInput, orderDetailsOutput } from "../database/models/orderDetailsModel";
import * as repository from "../database/repositories/orderDetailsRepositorie";

export const getAll = async (): Promise<orderDetailsOutput[]> => {
  return await repository.getAll();
};
export const getById = async (id: number): Promise<orderDetailsOutput> => {
    return await repository.getById(id);
}
export const create = async (payload: orderDetailsInput): Promise<orderDetailsOutput> => {
  return await repository.create(payload);
};
export const updateById = async (id: number, payload: orderDetailsInput): Promise<orderDetailsOutput> => {
  return await repository.updateById(id, payload);
};
export const deleteById = async (id: number): Promise<void> => {
  await repository.deleteById(id);
}