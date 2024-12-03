const Inventario = require("../models/Inventario");
const { Sequelize } = require("sequelize");

const InventarioService = {
  getAllInventarios: async () => {
    try {
      const inventarios = await Inventario.findAll();
      return inventarios;
    } catch (e) {
      throw new Error(e);
    }
  },

  getInventario: async (id) => {
    try {
      const inventario = await Inventario.findByPk(id);
      if (!inventario) {
        throw new Error("Inventario no encontrado");
      }
      return inventario;
    } catch (e) {
      throw new Error(e);
    }
  },

  createInventario: async (data) => {
    try {
      const inventario = await Inventario.create(data);
      return inventario;
    } catch (error) {
      throw new Error("Error al crear el inventario");
    }
  },

  updateInventario: async (id, data) => {
    try {
      const inventario = await Inventario.findByPk(id);

      if (!inventario) {
        return null;
      }

      const updatedData = {};

      if (data.cantidad !== undefined) updatedData.cantidad = data.cantidad;
      if (data.fecha_registro !== undefined)
        updatedData.fecha_registro = data.fecha_registro;
      if (data.ubicacion !== undefined) updatedData.ubicacion = data.ubicacion;

      await inventario.update(updatedData);
      return inventario;
    } catch (error) {
      throw new Error("Error al actualizar el inventario");
    }
  },

  deleteInventario: async (id) => {
    try {
      const inventario = await Inventario.findByPk(id);
      if (!producto) {
        throw new Error("Inventario no encontrado");
      }
      await inventario.destroy();
      return { message: "Inventario eliminado exitosamente" };
    } catch (error) {
      throw new Error("Error al eliminar el inventario");
    }
  },

  getInventarioPorProductoPorMes: async (idProducto) => {
    try {
      const inventarioPorMes = await Inventario.sequelize.query(
        `
        SELECT 
          TO_CHAR(fecha_registro, 'YYYY-MM') AS mes, 
          SUM(cantidad) AS cantidad_restante
        FROM inventario
        WHERE id_producto = :idProducto
        GROUP BY TO_CHAR(fecha_registro, 'YYYY-MM')
        ORDER BY mes;
        `,
        {
          replacements: { idProducto }, // Asegúrate de que se pasa el valor correctamente
          type: Sequelize.QueryTypes.SELECT,
        }
      );
      return inventarioPorMes;
    } catch (error) {
      throw new Error(
        "Error al obtener el inventario por producto: " + error.message
      );
    }
  },
};

module.exports = InventarioService;
