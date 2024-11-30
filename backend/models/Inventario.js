const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Inventario = sequelize.define(
  "Inventario",
  {
    id: {
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
    estado: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "inventario",
    timestamps: false,
  }
);

// Relación: Un Inventario pertenece a un Producto
Inventario.associate = function (models) {
  Inventario.belongsTo(models.Producto, {
    foreignKey: "id_producto",
    as: "producto", // Alias para acceder a la relación
  });
};

module.exports = Inventario;
