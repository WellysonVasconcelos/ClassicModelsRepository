import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../sequelize";

export interface paymentsAttributes {
  customerNumber: string;
  checkNumber: string;
  paymentDate: string;
  amount: string;

}

export interface paymentsInput extends Optional<paymentsAttributes, "checkNumber"> {}
export interface paymentsOutput extends Required<paymentsAttributes> {}

class payments extends Model<paymentsAttributes, paymentsInput> {
 declare checkNumber: string;
 declare customerNumber:string;
 declare paymentDate: string;
 declare amount: string;

}

payments.init(

  {
    checkNumber: {type: DataTypes.STRING, primaryKey: true, autoIncrement: true},
    customerNumber:{type: DataTypes.STRING},
    paymentDate:{type: DataTypes.STRING},
    amount:{type: DataTypes.STRING},
  },
  {
    sequelize,
    modelName: "payments",
  }
);

export default payments;
