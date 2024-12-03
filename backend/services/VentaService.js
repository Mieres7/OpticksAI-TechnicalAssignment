const Venta = require("../models/Venta");
const { Sequelize } = require("sequelize");

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

  getVentasPorMes: async () => {
    try {
      const ventasPorMes = await Venta.sequelize.query(
        `SELECT 
            TO_CHAR(fecha_venta, 'YYYY-MM') AS mes, 
            COUNT(*) AS numero_de_ventas
         FROM ventas
         GROUP BY TO_CHAR(fecha_venta, 'YYYY-MM')
         ORDER BY mes;`,
        {
          type: Sequelize.QueryTypes.SELECT,
        }
      );
      return ventasPorMes;
    } catch (error) {
      throw new Error("Error al obtener ventas por mes: " + error.message);
    }
  },

  getVentasPorProductoPorMes: async (idProducto) => {
    try {
      const ventasPorMes = await Venta.sequelize.query(
        `
        SELECT 
          TO_CHAR(fecha_venta, 'YYYY-MM') AS mes, 
          SUM(cantidad_vendida) AS cantidad_vendida
        FROM ventas
        WHERE id_producto = :idProducto
        GROUP BY TO_CHAR(fecha_venta, 'YYYY-MM')
        ORDER BY mes;
        `,
        {
          replacements: { idProducto }, // Inyecta el idProducto en la consulta
          type: Sequelize.QueryTypes.SELECT, // Especificamos que es una consulta de selección
        }
      );
      return ventasPorMes; // Devuelve el listado de ventas agrupadas por mes
    } catch (error) {
      throw new Error(
        "Error al obtener las ventas por producto: " + error.message
      );
    }
  },

  getVentasPorMetodoPago: async () => {
    try {
      const ventasPorMetodoPago = await Venta.sequelize.query(
        `
          SELECT 
            metodo_pago,
            COUNT(id_venta) AS cantidad_ventas
          FROM ventas
          GROUP BY metodo_pago
          ORDER BY cantidad_ventas DESC;  -- Puedes ordenar por cantidad si deseas
        `,
        {
          type: Sequelize.QueryTypes.SELECT, // Especificamos que es una consulta de selección
        }
      );
      return ventasPorMetodoPago; // Devuelve el listado de ventas por tipo de pago
    } catch (error) {
      throw new Error(
        "Error al obtener las ventas por método de pago: " + error.message
      );
    }
  },

  getTopProdcutosVendidos: async () => {
    try {
      const topProductos = await Venta.sequelize.query(
        `
        SELECT 
          p.id_producto, 
          p.nombre, 
          SUM(v.cantidad_vendida) AS cantidad_vendida
        FROM ventas v
        INNER JOIN productos p ON p.id_producto = v.id_producto
        GROUP BY p.id_producto, p.nombre
        ORDER BY cantidad_vendida DESC
        LIMIT 3;
        `,
        {
          type: Sequelize.QueryTypes.SELECT,
        }
      );
      return topProductos; // Retorna los 3 productos más vendidos
    } catch (error) {
      throw new Error(
        "Error al obtener los productos más vendidos: " + error.message
      );
    }
  },
};

module.exports = VentaService;
