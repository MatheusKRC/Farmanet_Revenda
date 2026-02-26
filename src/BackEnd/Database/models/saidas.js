/* eslint-disable no-unused-vars */
const {
    Model,
  } = require('sequelize');
  
  module.exports = (sequelize, DataTypes) => {
    class Saidas extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
      }
    }
    Saidas.init({
        descricao_s: DataTypes.STRING,
        fabricante_s: DataTypes.STRING,
        quantidade_s: DataTypes.INTEGER,
    }, {
      sequelize,
      timestamps: false,
      modelName: 'Saidas',
    });
    return Saidas;
  };
  