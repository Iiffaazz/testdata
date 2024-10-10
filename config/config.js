const env = require("dotenv").config().parsed;

module.exports = {
  development: {
    database1:{
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME1,
    host: env.DB_HOST,
    port: env.DB_PORT,
    dialect: env.DB_DIALECT,
    dialectModule: require('mysql2'),
    },
  },
  test: {
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    host: env.DB_HOST,
    port: env.DB_PORT,
    dialect: env.DB_DIALECT,
    dialectModule: require('mysql2'),
  },
  production: {
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    host: env.DB_HOST,
    port: env.DB_PORT,
    dialect: env.DB_DIALECT,
    dialectModule: require('mysql2'),
  }
};
