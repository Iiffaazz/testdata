'use strict';

const moment = require('moment-timezone');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('OtpSessions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      otp: {
        type: Sequelize.STRING,
        allowNull: false
      },
      expiresAt: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'active'
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('OtpSessions');
  }
};
