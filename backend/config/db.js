const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: "postgres",
});

module.exports = {
  development: {
    username: "postgres",
    password: "1234",
    database: "opticksai_db",
    host: "localhost",
    dialect: "postgres",
  },
  test: {
    username: "postgres",
    password: "1234",
    database: "opticksai_db_test",
    host: "localhost",
    dialect: "postgres",
  },
  production: {
    username: "postgres",
    password: "1234",
    database: "opticksai_db_prod",
    host: "localhost",
    dialect: "postgres",
  },
};

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Base de datos sincronizada correctamente.");
  })
  .catch((error) => {
    console.error("Error sincronizando base de datos: ", error);
  });

module.exports = sequelize;
