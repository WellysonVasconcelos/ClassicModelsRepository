import { Error, Sequelize } from "sequelize";

export const sequelize = new Sequelize("classicmodels", "root", "lorena25", {
    host: "localhost",
    dialect: "mysql",
    define: {
      freezeTableName: true,
      timestamps: false
    },
    logging: false
  });

export default () => {

  sequelize
    .authenticate()
    .then(() => {
      console.log("Conexão realizada com sucesso");
    })
    .catch((error: Error) => {
      console.log(`Conexão não sucecedida:${error}`);
    });
};
