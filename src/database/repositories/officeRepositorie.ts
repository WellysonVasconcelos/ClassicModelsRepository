import AppError from "../../utils/appError";
import Model, { OfficeInput, OfficeOutput } from "../models/officeModel";

export const getAll = async (): Promise<OfficeOutput[]> => {
    return await Model.findAll();
};

export const getById = async (id: number): Promise<OfficeOutput> => {
    const office = await Model.findByPk(id);

    if (!office) {
        throw new AppError("NotFoundError", "Registro não encontrado", 404);
    }
    return office;
};

export const create = async (payload: OfficeInput): Promise<OfficeOutput> => {
    return await Model.create(payload);
};

export const updateById = async (id: number, payload: OfficeInput): Promise<OfficeOutput> => {
    const office = await Model.findByPk(id);

    if (!office) {
        throw new AppError("NotFoundError", "Registro não encontrado", 404);
    }

    return await office.update(payload);
};

export const deleteById = async (id: number): Promise<void> => {
    const office = await Model.findByPk(id);

    if (!office) {
        throw new AppError("NotFoundError", "Registro não encontrado", 404);
    }

    return await office.destroy();
};