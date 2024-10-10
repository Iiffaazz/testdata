const env = require("dotenv").config().parsed;

if (!env) {
  throw new Error("⚠️ Couldn't find .env file ⚠️");
}

module.exports = {
  database_dsertifikat: {
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME1,
    host: env.DB_HOST,
    port: env.DB_PORT,
    dialect: env.DB_DIALECT,  // This should be correctly set to 'mysql'
    dialectModule: require('mysql2'),
  },
  development_database2: {
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME1,
    host: env.DB_HOST,
    port: env.DB_PORT,
    dialect: env.DB_DIALECT,  // This should be correctly set to 'mysql'
    dialectModule: require('mysql2'),
  },
  development_database2: {
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME1,
    host: env.DB_HOST,
    port: env.DB_PORT,
    dialect: env.DB_DIALECT,  // This should be correctly set to 'mysql'
    dialectModule: require('mysql2'),
  },
  
  test: {
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME, // Ensure DB_NAME is defined in your .env if you use this
    host: env.DB_HOST,
    port: env.DB_PORT,
    dialect: env.DB_DIALECT,
    dialectModule: require('mysql2'),
  },
  production: {
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME, // Ensure DB_NAME is defined in your .env if you use this
    host: env.DB_HOST,
    port: env.DB_PORT,
    dialect: env.DB_DIALECT,
    dialectModule: require('mysql2'),
  }
};
