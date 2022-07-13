import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../sequelize";
import Customer from "./customerModel";

export interface EmployeeAttributes {
  employeeNumber: number;
  lastName: string;
  firstName: string;
  extension: string;
  email: string;
  officeCode:string;
  reportsTo?: number;
  jobTitle: string;
}

export interface EmployeeInput extends Optional<EmployeeAttributes, "employeeNumber"> {}
export interface EmployeeOutput extends Required<EmployeeAttributes> {}

class Employee extends Model<EmployeeAttributes, EmployeeInput> {
  declare employeeNumber: number;
  declare lastName: string;
  declare firstName: string;
  declare extension: string;
  declare email: string;
  declare officeCode: string;
  declare reportsTo: number;
  declare jobTitle: string;
}

Employee.init(
  {
    employeeNumber: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    lastName: { type: DataTypes.STRING(50), allowNull: false },
    firstName: { type: DataTypes.STRING(50), allowNull: false },
    extension: { type: DataTypes.STRING(10), allowNull: false },
    email: { type: DataTypes.STRING(100), allowNull: false },
    officeCode: {type: DataTypes.STRING(10), allowNull: false},
    reportsTo: {type: DataTypes.INTEGER},
    jobTitle: { type: DataTypes.STRING(50), allowNull: false },
  },
  {
    sequelize,
    modelName: "employees",
  }
);
Customer.hasMany(Employee, {foreignKey: 'salesRepEmployeeNumber'});
Employee.belongsTo(Customer, {foreignKey: 'employeeNumber'});

export default Employee;
