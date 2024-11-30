// app.js

const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
require("dotenv").config(); // Cargar las variables de entorno

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Para poder recibir JSON en las peticiones

// Endpoint de prueba para verificar que la API está funcionando
app.get("/", (req, res) => {
  res.send("¡Hola, Mundo! El backend está funcionando.");
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express corriendo en http://localhost:${port}`);
});
