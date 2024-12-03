const express = require("express");
const router = express.Router();
const VentaController = require("../controllers/VentaController");

router.get("/", VentaController.getAllVentas);
router.get("/:id", VentaController.getVenta);
router.get("/por-mes", VentaController.getVentasPorMes);
router.get("/por-prod-mes/:id", VentaController.getVentasPorProductoPorMes);

router.post("/", VentaController.createVenta);

router.put("/:id", VentaController.updateVenta);

router.delete("/:id", VentaController.deleteVenta);

module.exports = router;
