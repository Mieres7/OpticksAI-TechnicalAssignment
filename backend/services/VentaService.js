const Venta = require("../models/Venta");

const VentaService = {
  getAllVentas: async () => {
    try {
      const ventas = await Venta.findAll();
      return ventas;
    } catch (e) {
      throw new Error(e);
    }
  },

  getVenta: async (id) => {
    try {
      const venta = await Venta.findByPk(id);
      if (!venta) {
        throw new Error("Venta no encontrada");
      }
      return venta;
    } catch (e) {
      throw new Error(e);
    }
  },

  createVenta: async (data) => {
    try {
      const venta = await Venta.create(data);
      return venta;
    } catch (error) {
      throw new Error("Error al crear la venta");
    }
  },

  updateVenta: async (id, data) => {
    try {
      const venta = await Venta.findByPk(id);

      if (!venta) {
        return null;
      }

      const updatedData = {};

      if (data.cantidad_vendida !== undefined)
        updatedData.cantidad_vendida = data.cantidad_vendida;
      if (data.precio_venta !== undefined)
        updatedData.precio_venta = data.precio_venta;
      if (data.fecha_venta !== undefined)
        updatedData.fecha_venta = data.fecha_venta;
      if (data.total_venta !== undefined)
        updatedData.total_venta = data.total_venta;
      if (data.metodo_pago !== undefined)
        updatedData.metodo_pago = data.metodo_pago;

      await venta.update(updatedData);
      return venta;
    } catch (error) {
      throw new Error("Error al actualizar el venta");
    }
  },

  deleteVenta: async (id) => {
    try {
      const venta = await Venta.findByPk(id);
      if (!producto) {
        throw new Error("Venta no encontrada");
      }
      await venta.destroy();
      return { message: "Venta eliminada exitosamente" };
    } catch (error) {
      throw new Error("Error al eliminar la venta");
    }
  },
};

module.exports = VentaService;
