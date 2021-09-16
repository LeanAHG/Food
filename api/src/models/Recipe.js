const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
// Resumen del plato *
// Puntuación
// Nivel de "comida saludable"
// Paso a paso
  sequelize.define('recipe', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resum: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    puntuation: {
      type: DataTypes.ENUM('1','2','3','4','5'),
      allowNull: false,
    }
  });
};
