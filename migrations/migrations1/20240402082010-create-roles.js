'use strict';

const moment = require('moment-timezone');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      role: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Roles');
  }
};