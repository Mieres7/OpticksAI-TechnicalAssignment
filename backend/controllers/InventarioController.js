const inventarioService = require("../services/InventarioService");

const inventarioController = {
  getAllInvenatarios: async (req, res) => {
    try {
      const inventarios = await inventarioService.getAllInventarios();
      res.status(200).json(inventarios);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getInventario: async (req, res) => {
    try {
      const { id } = req.params;
      const inventario = await inventarioService.getInventario(id);
      res.status(200).json(inventario);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createInventario: async (req, res) => {
    try {
      const { id_producto, cantidad, fecha_registro, ubicacion } = req.body;
      const newInventario = await inventarioService.createInventario({
        id_producto,
        cantidad,
        fecha_registro,
        ubicacion,
      });
      res.status(201).json(newInventario);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateInventario: async (req, res) => {
    try {
      const { id } = req.params;

      const { id_producto, cantidad, fecha_registro, ubicacion } = req.body;

      const inventario = await inventarioService.updateInventario(id, {
        id_producto,
        cantidad,
        fecha_registro,
        ubicacion,
      });

      if (!inventario) {
        return res.status(404).json({ message: "Inventario no encontrado." });
      }

      return res.status(200).json(inventario);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: error.message });
    }
  },

  deleteInventario: async (req, res) => {
    try {
      const { id } = req.params;

      const inventario = await inventarioService.deleteInventario(id);
      res.status(200).json(inventario);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getInventarioPorProductoPorMes: async (req, res) => {
    const { id } = req.params; // Obtén el idProducto desde los parámetros de la URL

    try {
      // Llama al servicio para obtener las ventas por mes
      const inventario = await inventarioService.getInventarioPorProductoPorMes(
        id
      );

      if (inventario.length === 0) {
        return res
          .status(404)
          .json({ message: "No se encontró inventario para este producto." });
      }

      // Devuelve el inventario en formato JSON
      res.json(inventario);
    } catch (error) {
      // console.error("Error al obtener inventario:", error);
      return res.status(500).json({ error: error.message });
    }
  },
};

module.exports = inventarioController;
