'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pengguna', [{
      nama: 'Metaversitas',
      email: 'metaversitas@kemendikbud.go.id',
      alamat: 'BSD',
      walletAddress: '0x00',
      status: 'Aktif',
      roleId: 2,
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pengguna', null, {});
  },
};
