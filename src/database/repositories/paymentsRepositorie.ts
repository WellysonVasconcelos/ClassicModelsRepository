import AppError from "../../utils/appError";
import Model, { paymentsInput, paymentsOutput } from "../models/paymentsModel";

export const getAll = async (): Promise<paymentsOutput[]> => {
    return await Model.findAll();
};

export const getById = async (id: string): Promise<paymentsOutput> => {
    const payments = await Model.findByPk(id);

    if (!payments) {
        throw new AppError("NotFoundError", "Registro não encontrado", 404);
    }
    return payments;
};

export const create = async (payload: paymentsInput): Promise<paymentsOutput> => {
    return await Model.create(payload);
};

export const updateById = async (id: string, payload: paymentsInput): Promise<paymentsOutput> => {
    const payments = await Model.findByPk(id);

    if (!payments) {
        throw new AppError("NotFoundError", "Registro não encontrado", 404);
    }

    return await payments.update(payload);
};

export const deleteById = async (id: string): Promise<void> => {
    const payments = await Model.findByPk(id);

    if (!payments) {
        throw new AppError("NotFoundError", "Registro não encontrado", 404);
    }

    return await payments.destroy();
};