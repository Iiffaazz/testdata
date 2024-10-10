'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Peserta', [{
      nama: 'John Doe',
      email: '8979329373@example.ac.id',
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Peserta', null, {});
  },
};
