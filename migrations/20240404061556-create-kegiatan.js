'use strict';

const moment = require('moment-timezone');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Kegiatan', {
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
      kategoriId: {
        type: Sequelize.INTEGER,
        references: {
          model: "KategoriKegiatan",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      poster: {
        type: Sequelize.STRING
      },
      judul: {
        type: Sequelize.STRING
      },
      slug: {
        type: Sequelize.STRING
      },
      tanggalMulai: {
        type: Sequelize.DATEONLY
      },
      jamMulai: {
        type: Sequelize.TIME
      },
      tanggalSelesai: {
        type: Sequelize.DATEONLY
      },
      jamSelesai: {
        type: Sequelize.TIME
      },
      pembicara: {
        type: Sequelize.STRING
      },
      deskripsi: {
        type: Sequelize.TEXT
      },
      tipeKegiatan: {
        type: Sequelize.STRING
      },
      link: {
        type: Sequelize.STRING
      },
      tempat: {
        type: Sequelize.STRING
      },
      kapasitas: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Kegiatan');
  }
};