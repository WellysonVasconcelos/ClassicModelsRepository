import { productLineInput, productLineOutput } from "../database/models/productLineModel";
import * as repository from "../database/repositories/productLineRepositorie";

export const getAll = async (): Promise<productLineOutput[]> => {
  return await repository.getAll();
};
export const getById = async (id: number): Promise<productLineOutput> => {
    return await repository.getById(id);
}
export const create = async (payload: productLineInput): Promise<productLineOutput> => {
  return await repository.create(payload);
};
export const updateById = async (id: number, payload: productLineInput): Promise<productLineOutput> => {
  return await repository.updateById(id, payload);
};
export const deleteById = async (id: number): Promise<void> => {
  await repository.deleteById(id);
}