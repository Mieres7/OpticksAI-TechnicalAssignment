const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("opticksai_db", "postgres", "1234", {
  host: "postgres",
  dialect: "postgres",
  logging: false,
});

sequelize
  .sync()
  .then(() => {
    console.log("Base de datos sincronizada");
  })
  .catch((error) => {
    console.error("Error al sincronizar la base de datos:", error);
  });

module.exports = sequelize;
