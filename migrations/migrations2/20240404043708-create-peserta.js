'use strict';

const moment = require('moment-timezone');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Peserta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      did: {
        type: Sequelize.STRING
      },
      nama: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      walletAddress: {
        type: Sequelize.TEXT
      },
      pt: {
        type: Sequelize.TEXT
      },
      kodePt: {
        type: Sequelize.TEXT
      },
      prodi: {
        type: Sequelize.TEXT
      },
      statusDchain: {
        type: Sequelize.ENUM('Non Dchain User', 'Dchain User'),
      },
      status: {
        type: Sequelize.ENUM('Belum Aktif', 'Aktif'),
        defaultValue: 'Belum Aktif'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: moment.tz('Asia/Jakarta').format('YYYY-MM-DD HH:mm:ss')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: moment.tz('Asia/Jakarta').format('YYYY-MM-DD HH:mm:ss')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Peserta');
  }
};