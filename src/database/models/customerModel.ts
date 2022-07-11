import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../sequelize";

export interface CustomerAttributes {
  customerNumber: number;
  customerName: string;
  contactLastName: string;
  contactFirstName: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  creditLimit: number;
}

export interface CustomerInput extends Optional<CustomerAttributes, "customerNumber"> {}
export interface CustomerOutput extends Required<CustomerAttributes> {}

class Customer extends Model<CustomerAttributes, CustomerInput> {
  declare customerNumber: number;
  declare customerName: string;
  declare contactLastName: string;
  declare contactFirstName: string;
  declare phone: string;
  declare addressLine1: string;
  declare addressLine2: string;
  declare city: string;
  declare state: string;
  declare postalCode: string;
  declare country: string;
  declare creditLimit: number;
}

Customer.init(
  {
    customerNumber: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    customerName: { type: DataTypes.STRING },
    contactLastName: { type: DataTypes.STRING },
    contactFirstName: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING },
    addressLine1: { type: DataTypes.STRING },
    addressLine2: { type: DataTypes.STRING },
    city: { type: DataTypes.STRING },
    state: { type: DataTypes.STRING },
    postalCode: { type: DataTypes.STRING },
    country: { type: DataTypes.STRING },
    creditLimit: { type: DataTypes.INTEGER },
  },
  {
    sequelize,
    modelName: "customers",
  }
);

export default Customer;
