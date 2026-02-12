/* eslint-disable no-unused-vars */

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      codigo: {
        type: Sequelize.INTEGER
      },
      descricao: {
        type: Sequelize.STRING
      },
      fabricante: {
        type: Sequelize.STRING
      },
      quantidade: {
        type: Sequelize.INTEGER
      },
      preco_compra: {
        type: Sequelize.DECIMAL(10, 2)
      },
      preco_venda: {
        type: Sequelize.DECIMAL(10, 2)
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  },
};
