import AppError from "../../utils/appError";
import Model, { EmployeeInput, EmployeeOutput } from "../models/employeModel";

export const getAll = async (): Promise<EmployeeOutput[]> => {
    return await Model.findAll({
        include: {all: true}
    });
};

export const getById = async (id: number): Promise<EmployeeOutput> => {
    const employee = await Model.findOne({
        where: {
            employeeNumber: id
        }, include: {all: true, nested: true}
    });

    if (!employee) {
        throw new AppError("NotFoundError", "Registro não encontrado", 404);
    }
    return employee;
};

export const create = async (payload: EmployeeInput): Promise<EmployeeOutput> => {
    return await Model.create(payload);
};

export const updateById = async (id: number, payload: EmployeeInput): Promise<EmployeeOutput> => {
    const employee = await Model.findByPk(id);

    if (!employee) {
        throw new AppError("NotFoundError", "Registro não encontrado", 404);
    }

    return await employee.update(payload);
};

export const deleteById = async (id: number): Promise<void> => {
    const employee = await Model.findByPk(id);

    if (!employee) {
        throw new AppError("NotFoundError", "Registro não encontrado", 404);
    }

    return await employee.destroy();
};