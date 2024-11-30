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
      const { nombre, descripcion, categoria, precio_unitario } = req.body;
      const newInventario = await inventarioService.createInventario({
        nombre,
        descripcion,
        categoria,
        precio_unitario,
      });
      res.status(201).json(newInventario);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateInventario: async (req, res) => {
    try {
      const { id } = req.params;

      const { nombre, descripcion, categoria, precio_unitario } = req.body;

      const inventario = await inventarioService.updateInventario(id, {
        nombre,
        descripcion,
        categoria,
        precio_unitario,
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
