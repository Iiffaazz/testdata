'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('KategoriKegiatan', [
      { nama: 'Seminar', slug: 'seminar' },
      { nama: 'Kursus', slug: 'kursus' },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('KategoriKegiatan', null, {});
  },
};
