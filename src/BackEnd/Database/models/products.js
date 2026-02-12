/* eslint-disable no-unused-vars */
const {
    Model,
  } = require('sequelize');
  
  module.exports = (sequelize, DataTypes) => {
    class Products extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
      }
    }
    Products.init({
        codigo: DataTypes.INTEGER,
        descricao: DataTypes.STRING,
        fabricante: DataTypes.STRING,
        quantidade: DataTypes.INTEGER,
        preco_compra: {
          type: DataTypes.DECIMAL,
          get() {
            const rawValue = this.getDataValue("preco_compra")
            return rawValue ? Number(rawValue) : null
          }
        },
        preco_venda: {
          type: DataTypes.DECIMAL,
          get() {
            const rawValue = this.getDataValue("preco_venda")
            return rawValue ? Number(rawValue) : null
          }
        }
    }, {
      sequelize,
      timestamps: false,
      modelName: 'Products',
    });
    return Products;
  };
  