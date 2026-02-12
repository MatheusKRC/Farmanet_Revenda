/* eslint-disable no-unused-vars */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      username: 'Baguncinha',
      user_email: 'farmaciafarmanet@hotmail.com',
      user_password: 'ab030389',
      company_name: 'Farmanet',
      cnpj: '09334766000187',
    }]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users');
  },
};
