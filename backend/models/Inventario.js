const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Producto = require("../models/Producto");

const Inventario = sequelize.define(
  "Inventario",
  {
    id_inventario: {
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
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fecha_registro: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    ubicacion: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  },
  {
    tableName: "inventario",
    timestamps: false,
  }
);

Inventario.associate = function (models) {
  Inventario.belongsTo(models.Producto, {
    foreignKey: "id_producto",
    as: "producto",
  });
};

module.exports = Inventario;
