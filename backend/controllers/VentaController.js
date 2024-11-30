const ventaService = require("../services/VentaService");

const ventaController = {
  getAllVentas: async (req, res) => {
    try {
      const ventas = await ventaService.getAllVentas();
      res.status(200).json(ventas);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getVenta: async (req, res) => {
    try {
      const { id } = req.params;
      const venta = await ventaService.getVenta(id);
      res.status(200).json(venta);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createVenta: async (req, res) => {
    try {
      const { nombre, descripcion, categoria, precio_unitario } = req.body;
      const newVenta = await ventaService.createVenta({
        nombre,
        descripcion,
        categoria,
        precio_unitario,
      });
      res.status(201).json(newVenta);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateVenta: async (req, res) => {
    try {
      const { id } = req.params;

      const { nombre, descripcion, categoria, precio_unitario } = req.body;

      const venta = await ventaService.updateVenta(id, {
        nombre,
        descripcion,
        categoria,
        precio_unitario,
      });

      if (!venta) {
        return res.status(404).json({ message: "Venta no encontrada." });
      }

      return res.status(200).json(venta);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: error.message });
    }
  },

  deleteVenta: async (req, res) => {
    try {
      const { id } = req.params;

      const venta = await ventaService.deleteVenta(id);
      res.status(200).json(venta);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = ventaController;
