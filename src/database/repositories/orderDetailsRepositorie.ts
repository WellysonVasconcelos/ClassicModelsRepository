import AppError from "../../utils/appError";
import Model, { orderDetailsInput, orderDetailsOutput } from "../models/orderDetailsModel";

export const getAll = async (): Promise<orderDetailsOutput[]> => {
    return await Model.findAll();
};

export const getById = async (id: number): Promise<orderDetailsOutput> => {
    const order = await Model.findByPk(id);

    if (!order) {
        throw new AppError("NotFoundError", "Registro não encontrado", 404);
    }
    return order;
};

export const create = async (payload: orderDetailsInput): Promise<orderDetailsOutput> => {
    return await Model.create(payload);
};

export const updateById = async (id: number, payload: orderDetailsInput): Promise<orderDetailsOutput> => {
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