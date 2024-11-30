const productoService = require("../services/ProductoService");

const productoController = {
  getAllProductos: async (req, res) => {
    try {
      const productos = await productoService.getAllProductos();
      res.status(200).json(productos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getProducto: async (req, res) => {
    try {
      const { id } = req.params;
      const producto = await productoService.getProducto(id);
      res.status(200).json(producto);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createProducto: async (req, res) => {
    try {
      const { nombre, descripcion, categoria, precio_unitario } = req.body;
      const newProducto = await productoService.createProducto({
        nombre,
        descripcion,
        categoria,
        precio_unitario,
      });
      res.status(201).json(newProducto);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateProducto: async (req, res) => {
    try {
      const { id } = req.params;

      const { nombre, descripcion, categoria, precio_unitario } = req.body;

      const producto = await productoService.updateProducto(id, {
        nombre,
        descripcion,
        categoria,
        precio_unitario,
      });

      if (!producto) {
        return res.status(404).json({ message: "Producto no encontrado." });
      }

      return res.status(200).json(producto);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: error.message });
    }
  },

  deleteProducto: async (req, res) => {
    try {
      const { id } = req.params;

      const producto = await productoService.deleteProducto(id);
      res.status(200).json(producto);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = productoController;
