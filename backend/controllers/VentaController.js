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
      const {
        id_producto,
        cantidad_vendida,
        precio_venta,
        fecha_venta,
        total_venta,
        metodo_pago,
      } = req.body;
      const newVenta = await ventaService.createVenta({
        id_producto,
        cantidad_vendida,
        precio_venta,
        fecha_venta,
        total_venta,
        metodo_pago,
      });
      res.status(201).json(newVenta);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateVenta: async (req, res) => {
    try {
      const { id } = req.params;

      const {
        id_producto,
        cantidad_vendida,
        precio_venta,
        fecha_venta,
        total_venta,
        metodo_pago,
      } = req.body;

      const venta = await ventaService.updateVenta(id, {
        id_producto,
        cantidad_vendida,
        precio_venta,
        fecha_venta,
        total_venta,
        metodo_pago,
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

  getVentasPorMes: async (req, res) => {
    try {
      const ventasPorMes = await ventaService.getVentasPorMes();
      res.json(ventasPorMes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getVentasPorProductoPorMes: async (req, res) => {
    const { id } = req.params; // Obtiene el id_producto desde los parámetros de la URL
    try {
      // Llamamos al servicio para obtener las ventas agrupadas por mes
      const ventasPorMes = await ventaService.getVentasPorProductoPorMes(id);

      // Si no hay ventas, respondemos con un mensaje adecuado
      if (ventasPorMes.length === 0) {
        return res
          .status(404)
          .json({ message: "No se encontraron ventas para este producto." });
      }

      // Devolvemos las ventas agrupadas por mes
      res.json(ventasPorMes);
    } catch (error) {
      // En caso de error, respondemos con el mensaje de error
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = ventaController;
