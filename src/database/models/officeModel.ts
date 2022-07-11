import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../sequelize";

export interface OfficeAttributes {
  officeCode: string;
  city: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  state: string;
  country: string;
  postalCode: string;
  territory: string;
}

export interface OfficeInput extends Optional<OfficeAttributes, "officeCode"> {}
export interface OfficeOutput extends Required<OfficeAttributes> {}

class Office extends Model<OfficeAttributes, OfficeInput> {
  declare officeCode: string;
  declare city: string;
  declare phone: string;
  declare addressLine1: string;
  declare addressLine2: string;
  declare state: string;
  declare country: string;
  declare postalCode: string;
  declare territory: string;
}

Office.init(
  {
    officeCode: {
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement: true,
    },
    city: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING },
    addressLine1: { type: DataTypes.STRING },
    addressLine2: { type: DataTypes.STRING },
    state: { type: DataTypes.STRING },
    country: { type: DataTypes.STRING },
    postalCode: { type: DataTypes.STRING },
    territory: {type:DataTypes.STRING}
  },
  {
    sequelize,
    modelName: "offices",
  }
);

export default Office;
