import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../sequelize";

export interface productLineAttributes {
  productLine: string;
  textDescription: string;
  htmlDescription: string;
  image: string;
}

export interface productLineInput extends Optional<productLineAttributes, "productLine"> {}
export interface productLineOutput extends Required<productLineAttributes> {}

class productLine extends Model<productLineAttributes, productLineInput> {
  declare productLine: string;
  declare textDescription: string;
  declare htmlDescription: string;
  declare image: string;
}

productLine.init(
  {
    productLine: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    textDescription: { type: DataTypes.STRING },
    htmlDescription: { type: DataTypes.STRING },
    image: { type: DataTypes.STRING },
  },
  {
    sequelize,
    modelName: "productlines",
  }
);

export default productLine;
