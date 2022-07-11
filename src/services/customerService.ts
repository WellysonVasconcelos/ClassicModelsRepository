import { CustomerInput, CustomerOutput } from "../database/models/customerModel";
import * as repository from "../database/repositories/customerRepositorie";

export const getAll = async (): Promise<CustomerOutput[]> => {
  return await repository.getAll();
};
export const getById = async (id: number): Promise<CustomerOutput> => {
    return await repository.getById(id);
}
export const create = async (payload: CustomerInput): Promise<CustomerOutput> => {
  return await repository.create(payload);
};
export const updateById = async (id: number, payload: CustomerInput): Promise<CustomerOutput> => {
  return await repository.updateById(id, payload);
};
export const deleteById = async (id: number): Promise<void> => {
  await repository.deleteById(id);
};
