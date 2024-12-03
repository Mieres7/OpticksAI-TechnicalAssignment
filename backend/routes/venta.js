const express = require("express");
const router = express.Router();
const VentaController = require("../controllers/VentaController");

router.get("/", VentaController.getAllVentas);
router.get("/:id", VentaController.getVenta);
router.get("/por-mes", VentaController.getVentasPorMes);
router.get("/por-prod-mes/:id", VentaController.getVentasPorProductoPorMes);
router.get("/por-metodo-pago/:id", VentaController.getVentasPorMetodoPago);
router.get("/top-productos/:id", VentaController.getTopProdcutosVendidos);

router.post("/", VentaController.createVenta);

router.put("/:id", VentaController.updateVenta);

router.delete("/:id", VentaController.deleteVenta);

module.exports = router;
