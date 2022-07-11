import { productsInput, productsOutput } from "../database/models/productsModel";
import * as repository from "../database/repositories/productsRepositories";

export const getAll = async (): Promise<productsOutput[]> => {
  return await repository.getAll();
};
export const getById = async (id: string): Promise<productsOutput> => {
    return await repository.getById(id);
}
export const create = async (payload: productsInput): Promise<productsOutput> => {
  return await repository.create(payload);
};
export const updateById = async (id: string, payload: productsInput): Promise<productsOutput> => {
  return await repository.updateById(id, payload);
};
export const deleteById = async (id: string): Promise<void> => {
  await repository.deleteById(id);
}