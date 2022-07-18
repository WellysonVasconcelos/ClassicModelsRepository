import AppError from "../../utils/appError";
import Customer from "../models/customerModel";
import Model, { paymentsInput, paymentsOutput } from "../models/paymentsModel";

export const getAll = async (): Promise<paymentsOutput[]> => {
    return await Model.findAll({
        include: Customer
    });
};

export const getById = async (id: string): Promise<paymentsOutput> => {
    const payments = await Model.findOne({
        where: {
            customerNumber: id
        }, include: Customer
    });

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