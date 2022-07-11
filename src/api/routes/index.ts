import customer from "./customerRoute";
import employes from "./employesRoute";
import office from "./officeRoute";
import order from "./orderRoute";
import payments from "./paymentsRoute";
import productLine from "./productLineRoute";
import products from "./productsRoute";


import express, {Router} from 'express';

const routes = express.Router();

routes.use("/customer", customer);
routes.use("/employes", employes);
routes.use("/office" , office);
routes.use("/order" , order);
routes.use("/payments" , payments);
routes.use("/productLine" , productLine);
routes.use("/products" , products);


export default routes;