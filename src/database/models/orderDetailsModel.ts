import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../sequelize";
import Order from "./orderModels";
import products from "./productsModel";

export interface orderDetailsAttributes {
  orderNumber: number;
  productCode: string;
  quantityOrdered: number;
  priceEach: number;
  orderLineNumber: number;
}

export interface orderDetailsInput extends Optional<orderDetailsAttributes, "orderNumber"> {}
export interface orderDetailsOutput extends Required<orderDetailsAttributes> {}

class orderDetails extends Model<orderDetailsAttributes, orderDetailsInput> {
 declare orderNumber: number;
 declare productCode: string;
 declare quantityOrdered: number;
 declare priceEach: number;
 declare orderLineNumber: number;
}

orderDetails.init(

  {
    orderNumber:{type: DataTypes.INTEGER , primaryKey: true, autoIncrement: true},
    productCode: {type: DataTypes.STRING(15), allowNull: false},
    quantityOrdered:{type: DataTypes.INTEGER, allowNull: false},
    priceEach:{type: DataTypes.DECIMAL(10,2), allowNull: false},
    orderLineNumber:{type: DataTypes.SMALLINT, allowNull: false},
  },
  {
    sequelize,
    modelName: "ordersDetails",
  }
);
Order.belongsToMany(products, {foreignKey: 'orderNumber', through: orderDetails});
products.belongsToMany(Order, {foreignKey: 'productCode', through: orderDetails});

export default orderDetails;
