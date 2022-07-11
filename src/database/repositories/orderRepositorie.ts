import AppError from "../../utils/appError";
import Model, { orderInput, orderOutput } from "../models/orderModels";

export const getAll = async (): Promise<orderOutput[]> => {
    return await Model.findAll();
};

export const getById = async (id: number): Promise<orderOutput> => {
    const order = await Model.findByPk(id);

    if (!order) {
        throw new AppError("NotFoundError", "Registro não encontrado", 404);
    }
    return order;
};

export const create = async (payload: orderInput): Promise<orderOutput> => {
    return await Model.create(payload);
};

export const updateById = async (id: number, payload: orderInput): Promise<orderOutput> => {
    const order = await Model.findByPk(id);

    if (!order) {
        throw new AppError("NotFoundError", "Registro não encontrado", 404);
    }

    return await order.update(payload);
};

export const deleteById = async (id: number): Promise<void> => {
    const order = await Model.findByPk(id);

    if (!order) {
        throw new AppError("NotFoundError", "Registro não encontrado", 404);
    }

    return await order.destroy();
};