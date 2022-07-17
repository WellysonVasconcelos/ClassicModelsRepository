import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../sequelize";
import productLine from "./productLineModel";

export interface productsAttributes {
    productCode:string,
    productName:string,
    productLine: string,
    productScale:string,
    productVendor:string,
    productDescription:string,
    quantityInStock:number,
    buyPrice:number,
    MSRP:number,
}

export interface productsInput extends Optional<productsAttributes, "productCode"> {}
export interface productsOutput extends Required<productsAttributes> {}

class products extends Model<productsAttributes, productsInput> {
    declare productCode: string;
    declare productName: string;
    declare productLine: string;
    declare productScale: string;
    declare productVendor: string;
    declare productDescription: string;
    declare quantityInStock: number;
    declare buyPrice: number;
    declare MSRP: number;
}

products.init(
  {
    productCode: {type: DataTypes.STRING(15), primaryKey: true, autoIncrement: true},
    productName: {type: DataTypes.STRING(70), allowNull: false},
    productLine: {type: DataTypes.STRING(50), allowNull: false},
    productScale: {type: DataTypes.STRING(10), allowNull: false},
    productVendor: {type: DataTypes.STRING(50), allowNull: false},
    productDescription: {type: DataTypes.TEXT, allowNull: false},
    quantityInStock: {type: DataTypes.SMALLINT, allowNull: false},
    buyPrice: {type: DataTypes.DECIMAL(10,2), allowNull: false},
    MSRP: {type: DataTypes.DECIMAL(10,2), allowNull: false},
  },
  {
    sequelize,
    modelName: "products",
    paranoid: true
  }
);
products.hasMany(productLine, {foreignKey: 'productLine'});
productLine.belongsTo(products, {foreignKey: 'productLine'});


export default products;
