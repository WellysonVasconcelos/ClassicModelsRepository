import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../sequelize";

export interface orderAttributes {
  orderNumber: string;
  orderDate: string;
  requiredDate: string;
  shippedDate: string;
  status: string;
  comments: string;
}

export interface orderInput extends Optional<orderAttributes, "orderNumber"> {}
export interface orderOutput extends Required<orderAttributes> {}

class order extends Model<orderAttributes, orderInput> {
 declare orderNumber: string;
 declare orderDate: string;
 declare requiredDate: string;
 declare shippedDate: string;
 declare status: string;
 declare comments: string;
}

order.init(

  {
    orderNumber:{type: DataTypes.STRING , primaryKey: true, autoIncrement: true},
    orderDate: {type: DataTypes.STRING},
    requiredDate:{type: DataTypes.STRING},
    shippedDate:{type: DataTypes.STRING},
    status:{type: DataTypes.STRING},
    comments:{type: DataTypes.STRING},
  },
  {
    sequelize,
    modelName: "orders",
  }
);

export default order;
