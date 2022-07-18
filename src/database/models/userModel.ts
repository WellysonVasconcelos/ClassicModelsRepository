import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize";

export interface userAttributes {
  email: string;
  password: string;
}
class User extends Model<userAttributes, userAttributes> {
  declare email: string;
  declare password: string;
}
User.init(
  {
    email: { type: DataTypes.STRING, primaryKey: true },
    password: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize,
    modelName: "users",
    paranoid: true,
  }
);
export default User;
