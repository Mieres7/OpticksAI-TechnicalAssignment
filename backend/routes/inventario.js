const express = require("express");
const router = express.Router();
const InventarioController = require("../controllers/InventarioController");

router.get("/", InventarioController.getAllInvenatarios);
router.get("/:id", InventarioController.getInventario);

router.post("/", InventarioController.createInventario);

router.put("/:id", InventarioController.updateInventario);

router.delete("/:id", InventarioController.deleteInventario);

module.exports = router;
