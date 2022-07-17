import orderDetails from "./models/orderDetailsModel";
import Order from "./models/orderModels";
import Employee from "./models/employeModel"
import Customer from "./models/customerModel";
import Office from "./models/officeModel";
import sequelize from "../database/sequelize";
import productLine from "./models/productLineModel";
import products from "./models/productsModel";
import payments from "./models/paymentsModel";

export const initdb = async () => {
  await Promise.all([
    await sequelize(),
    console.log("sincronizando as tabelas"),
    await Customer.sync({ alter: true }),
    await Employee.sync({ alter: true }),
    await Office.sync({ alter: true }),
    await orderDetails.sync({ alter: true }),
    await Order.sync({ alter: true }),
    await payments.sync({ alter: true }),
    await productLine.sync({ alter: true }),
    await products.sync({ alter: true }),
  ]).then(() => {
    console.log("tabelas sincronizadas c sucesso");
  });
}