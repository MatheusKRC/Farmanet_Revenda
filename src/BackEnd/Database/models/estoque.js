/* eslint-disable no-unused-vars */
const {
    Model,
  } = require('sequelize');
  
  module.exports = (sequelize, DataTypes) => {
    class Estoque extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
      }
    }
    Estoque.init({
        descricao_estq: DataTypes.STRING,
        fabricante_estq: DataTypes.STRING,
        quantidade_estq: DataTypes.INTEGER,
    }, {
      sequelize,
      timestamps: false,
      modelName: 'Estoque',
    });
    return Estoque;
  };
  