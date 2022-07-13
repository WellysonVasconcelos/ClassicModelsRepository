import orderDetails from "./models/orderDetailsModel";
import Order from "./models/orderModels";

export const initdb = () => {
  console.log("sincronizando as tabelas");
  Promise.all([
    Order.sync({ alter: true }),
    orderDetails.sync({alter: true})

  ]).then(() => {
    console.log('tabelas sincronizadas c sucesso')
  })
};
