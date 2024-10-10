'use strict';

const moment = require('moment-timezone');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Kredensial', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      penggunaId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Pengguna",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      pesertaId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Peserta",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      kegiatanId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Kegiatan",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      tanggalDikeluarkan: {
        type: Sequelize.DATEONLY
      },
      statusAbsen: {
        type: Sequelize.ENUM('Belum Absen', 'Sudah Absen'),
        defaultValue: 'Belum Absen'
      },
      statusMinting: {
        type: Sequelize.ENUM('Not Minted', 'Minted', 'Claimed'),
        defaultValue: 'Not Minted'
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
    await queryInterface.dropTable('Kredensial');
  }
};