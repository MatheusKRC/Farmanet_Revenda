/* eslint-disable no-unused-vars */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Collectors', [{
      collector_name: 'Luciano',
      collector_fess: 30,
      collector_fess_control: 35,
    },
    {
      collector_name: 'Keila',
      collector_fess: 40,
      collector_fess_control: 45,
    },
    {
      collector_name: 'Marcelo',
      collector_fess: 25,
      collector_fess_control: 30,
    },
    {
      collector_name: 'Rita',
      collector_fess: 40,
      collector_fess_control: 45,
    },
    {
      collector_name: 'Venda Ao Consumidor',
      collector_fess: 0,
      collector_fess_control: 0,
    },
  ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Collectors');
  },
};
