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
};

module.exports = inventarioController;
