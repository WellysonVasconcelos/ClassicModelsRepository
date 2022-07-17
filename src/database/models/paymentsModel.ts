import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../sequelize";
import Customer from "./customerModel";

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
    checkNumber: { type: DataTypes.STRING(50) },
    customerNumber: { type: DataTypes.INTEGER},
    paymentDate: { type: DataTypes.DATE, allowNull: false },
    amount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  },
  {
    sequelize,
    modelName: "payments",
  }
);
payments.removeAttribute("id")

Customer.hasOne(payments, { foreignKey: "customerNumber" });
payments.belongsTo(Customer, { foreignKey: "customerNumber" });

export default payments;
