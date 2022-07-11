import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../sequelize";

export interface productsAttributes {
    productCode:string,
    productName:string,
    productScale:string,
    productVendor:string,
    productDescription:string,
    quantityInStock:string,
    buyPrice:string,
    MSRP:string,
}

export interface productsInput extends Optional<productsAttributes, "productCode"> {}
export interface productsOutput extends Required<productsAttributes> {}

class products extends Model<productsAttributes, productsInput> {
    declare productCode: string;
    declare productName: string;
    declare productScale: string;
    declare productVendor: string;
    declare productDescription: string;
    declare quantityInStock: string;
    declare buyPrice: string;
    declare MSRP: string;
}

products.init(
  {
    productCode: {type: DataTypes.STRING, primaryKey: true, autoIncrement: true},
    productName: {type: DataTypes.STRING},
    productScale: {type: DataTypes.STRING},
    productVendor: {type: DataTypes.STRING},
    productDescription: {type: DataTypes.STRING},
    quantityInStock: {type: DataTypes.STRING},
    buyPrice: {type: DataTypes.STRING},
    MSRP: {type: DataTypes.STRING},
  },
  {
    sequelize,
    modelName: "products",
  }
);

export default products;
