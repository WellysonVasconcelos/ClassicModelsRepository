import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../sequelize";
import Customer from "../models/customerModel";

export interface orderAttributes {
  orderNumber: number;
  orderDate: Date;
  requiredDate: Date;
  shippedDate?: Date;
  status: string;
  comments?: string;
  customerNumber: number;
}

export interface orderInput extends Optional<orderAttributes, "orderNumber"> {}
export interface orderOutput extends Required<orderAttributes> {}

class Order extends Model<orderAttributes, orderInput> {
 declare orderNumber: number;
 declare orderDate: Date;
 declare requiredDate: Date;
 declare shippedDate: Date;
 declare status: string;
 declare comments: string;
 declare customerNumber: number;
}

Order.init(

  {
    orderNumber:{type: DataTypes.INTEGER , primaryKey: true, autoIncrement: true},
    orderDate: {type: DataTypes.DATE, allowNull: false},
    requiredDate:{type: DataTypes.DATE, allowNull: false},
    shippedDate:{type: DataTypes.DATE},
    status:{type: DataTypes.STRING(15), allowNull: false},
    comments:{type: DataTypes.TEXT},
    customerNumber: {type: DataTypes.INTEGER, allowNull: false}
  },
  {
    sequelize,
    modelName: "orders",
  }
);

Customer.hasMany(Order, {foreignKey: 'customerNumber'});
Order.belongsTo(Customer, {foreignKey: 'customerNumber'});

export default Order;
