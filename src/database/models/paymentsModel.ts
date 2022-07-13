import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../sequelize";

export interface paymentsAttributes {
  customerNumber: number;
  checkNumber: string;
  paymentDate: Date;
  amount: string;
}

export interface paymentsInput
  extends Optional<paymentsAttributes, "checkNumber"> {}
export interface paymentsOutput extends Required<paymentsAttributes> {}

class payments extends Model<paymentsAttributes, paymentsInput> {
  declare customerNumber: number;
  declare checkNumber: string;
  declare paymentDate: Date;
  declare amount: string;
}

payments.init(
  {
    checkNumber: {
      type: DataTypes.STRING(50),
      primaryKey: true,
      autoIncrement: true,
    },
    customerNumber: { type: DataTypes.INTEGER, allowNull: false },
    paymentDate: { type: DataTypes.DATE, allowNull: false },
    amount: { type: DataTypes.DECIMAL(10,2), allowNull: false },
  },
  {
    sequelize,
    modelName: "payments",
  }
);


export default payments;
