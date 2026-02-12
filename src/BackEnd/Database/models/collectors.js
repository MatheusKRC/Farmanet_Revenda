/* eslint-disable no-unused-vars */
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Collectors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  Collectors.init({
    collector_name: DataTypes.STRING,
    collector_fess: DataTypes.INTEGER,
    collector_fess_control: DataTypes.INTEGER,
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Collectors',
  });
  return Collectors;
};
