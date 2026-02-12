/* eslint-disable no-unused-vars */
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  Users.init({
    username: DataTypes.STRING,
    user_email: DataTypes.STRING,
    user_password: DataTypes.STRING,
    company_name: DataTypes.STRING,
    cnpj: DataTypes.STRING,
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Users',
  });
  return Users;
};
