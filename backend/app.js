// app.js
const sequelize = require("./config/db"); // Importa la conexión a la base de datos
const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
require("dotenv").config(); // Cargar las variables de entorno

const productoRoutes = require("./routes/producto");
const inventarioRoutes = require("./routes/inventario");
const ventaRoutes = require("./routes/venta");

// const Producto = require("./models/Producto");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Para poder recibir JSON en las peticiones

// Usa las rutas de productos
app.use("/producto", productoRoutes);
app.use("/inventario", inventarioRoutes);
app.use("/venta", ventaRoutes);

app.get("/", (req, res) => {
  res.send("¡Hola, Mundo! El backend está funcionando.");
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express corriendo en http://localhost:${port}`);
});
