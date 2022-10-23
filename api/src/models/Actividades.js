const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Actividades", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dificultad: {
        type: DataTypes.INTEGER,
        allowNull: false 
    },
    duracion: {
        type: DataTypes.INTEGER,
        allowNull: false 
    },
    temporada: {
        type: DataTypes.STRING,
        allowNull: false 
    },
  });
};
// Actividad Turística con las siguientes propiedades:
// ID
// Nombre
// Dificultad (Entre 1 y 5)
// Duración
// Temporada (Verano, Otoño, Invierno o Primavera)
