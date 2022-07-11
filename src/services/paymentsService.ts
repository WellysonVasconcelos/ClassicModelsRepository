import { paymentsInput, paymentsOutput } from "../database/models/paymentsModel";
import * as repository from "../database/repositories/paymentsRepositorie";

export const getAll = async (): Promise<paymentsOutput[]> => {
  return await repository.getAll();
};
export const getById = async (id: string): Promise<paymentsOutput> => {
    return await repository.getById(id);
}
export const create = async (payload: paymentsInput): Promise<paymentsOutput> => {
  return await repository.create(payload);
};
export const updateById = async (id: string, payload: paymentsInput): Promise<paymentsOutput> => {
  return await repository.updateById(id, payload);
};
export const deleteById = async (id: string): Promise<void> => {
  await repository.deleteById(id);
}