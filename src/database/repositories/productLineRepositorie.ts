import AppError from "../../utils/appError";
import Model, { productLineInput, productLineOutput } from "../models/productLineModel";

export const getAll = async (): Promise<productLineOutput[]> => {
    return await Model.findAll();
};

export const getById = async (id: number): Promise<productLineOutput> => {
    const productLine = await Model.findByPk(id);

    if (!productLine) {
        throw new AppError("NotFoundError", "Registro não encontrado", 404);
    }
    return productLine;
};

export const create = async (payload: productLineInput): Promise<productLineOutput> => {
    return await Model.create(payload);
};

export const updateById = async (id: number, payload: productLineInput): Promise<productLineOutput> => {
    const productLine = await Model.findByPk(id);

    if (!productLine) {
        throw new AppError("NotFoundError", "Registro não encontrado", 404);
    }

    return await productLine.update(payload);
};

export const deleteById = async (id: number): Promise<void> => {
    const productLine = await Model.findByPk(id);

    if (!productLine) {
        throw new AppError("NotFoundError", "Registro não encontrado", 404);
    }

    return await productLine.destroy();
};