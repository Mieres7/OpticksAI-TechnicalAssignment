const Producto = require("../models/Producto");

const ProductoService = {
  getAllProductos: async () => {
    try {
      const productos = await Producto.findAll();
      return productos;
    } catch (e) {
      throw new Error(e);
    }
  },

  getProducto: async (id) => {
    try {
      const producto = await Producto.findByPk(id);
      if (!producto) {
        throw new Error("Producto no encontrado");
      }
      return producto;
    } catch (e) {
      throw new Error(e);
    }
  },

  createProducto: async (data) => {
    try {
      const producto = await Producto.create(data);
      return producto;
    } catch (error) {
      throw new Error("Error al crear el producto");
    }
  },

  updateProducto: async (id, data) => {
    try {
      const producto = await Producto.findByPk(id);

      if (!producto) {
        return null;
      }

      const updatedData = {};

      if (data.nombre !== undefined) updatedData.nombre = data.nombre;
      if (data.descripcion !== undefined)
        updatedData.descripcion = data.descripcion;
      if (data.categoria !== undefined) updatedData.categoria = data.categoria;
      if (data.precio_unitario !== undefined)
        updatedData.precio_unitario = data.precio_unitario;

      await producto.update(updatedData);
      return producto;
    } catch (error) {
      throw new Error("Error al actualizar el producto");
    }
  },

  deleteProducto: async (id) => {
    try {
      const producto = await Producto.findByPk(id);
      if (!producto) {
        throw new Error("Producto no encontrado");
      }
      await producto.destroy();
      return { message: "Producto eliminado exitosamente" };
    } catch (error) {
      throw new Error("Error al eliminar el producto");
    }
  },
};

module.exports = ProductoService;
