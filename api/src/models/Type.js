const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('type', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, //esto hace que se genere automaticamente el id
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }

  });
};
