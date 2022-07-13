import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../sequelize";
import products from "./productsModel";

export interface productLineAttributes {
  productLine: string;
  textDescription?: string;
  htmlDescription?: string;
  image?: Blob;
}

export interface productLineInput extends Optional<productLineAttributes, "productLine"> {}
export interface productLineOutput extends Required<productLineAttributes> {}

class productLine extends Model<productLineAttributes, productLineInput> {
  declare productLine: string;
  declare textDescription: string;
  declare htmlDescription: string;
  declare image: Blob;
}

productLine.init(
  {
    productLine: {
      type: DataTypes.STRING(50),
      primaryKey: true,
      autoIncrement: true,
    },
    textDescription: { type: DataTypes.STRING(4000), allowNull: false },
    htmlDescription: { type: DataTypes.TEXT },
    image: { type: DataTypes.BLOB('medium') },
  },
  {
    sequelize,
    modelName: "productlines",
  }
);
products.hasMany(productLine, {foreignKey: 'productLine'});
productLine.belongsTo(products, {foreignKey: 'productLine'});

export default productLine;
