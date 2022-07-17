import { Error, Sequelize } from "sequelize";

export const sequelize = new Sequelize("classicmodels", "root", "lorena25", {
    host: "localhost",
    dialect: "mysql",
    define: {
      freezeTableName: true,
      // timestamps: false
      createdAt: false,
      updatedAt: false
    },
    logging: false
  });

export default async () => {

  await sequelize
    .authenticate()
    .then(() => {
      console.log("Conexão realizada com sucesso");
    })
    .catch((error: Error) => {
      console.log(`Conexão não sucecedida:${error}`);
    });
  }