const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Producto = require("../models/Producto");

const Venta = sequelize.define(
  "Venta",
  {
    id_venta: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Producto,
        key: "id",
      },
    },
    cantidad_vendida: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    precio_venta: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    fecha_venta: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    total_venta: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    metodo_pago: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  },
  {
    tableName: "ventas",
    timestamps: false,
  }
);

Venta.associate = function (models) {
  Venta.belongsTo(models.Producto, {
    foreignKey: "id_producto",
    as: "producto",
  });
};

module.exports = Venta;
