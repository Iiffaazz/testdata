const env = require('dotenv').config().parsed;

module.exports = {
  development_database1: {
    username: env.DB_USERNAME_DATABASE_1,
    password: env.DB_PASSWORD_DATABASE_1,
    database: env.DB_NAME_DATABASE_1,
    host: env.DB_HOST_DATABASE_1,
    port: env.DB_PORT_DATABASE_1,
    dialect: env.DB_DIALECT_DATABASE_1,
    dialectModule: require('mysql2'),
    migrationStoragePath: 'migrations/migrations1',
    seederStoragePath: 'seeders/seeder1',
  },
  development_database2: {
    username: env.DB_USERNAME_DATABASE_2,
    password: env.DB_PASSWORD_DATABASE_2,
    database: env.DB_NAME_DATABASE_2,
    host: env.DB_HOST_DATABASE_2,
    port: env.DB_PORT_DATABASE_2,
    dialect: env.DB_DIALECT_DATABASE_2,
    dialectModule: require('mysql2'),
    migrationStoragePath: 'migrations/migrations2',
    seederStoragePath: 'seeders/seeder2',
  },
    development_database3: {
      username: env.DB_USERNAME_DATABASE_3,
      password: env.DB_PASSWORD_DATABASE_3,
      database: env.DB_NAME_DATABASE_3,
      host: env.DB_HOST_DATABASE_3,
      port: env.DB_PORT_DATABASE_3,
      dialect: env.DB_DIALECT_DATABASE_3,
      dialectModule: require('mysql2'),
    },

  test: {
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    host: env.DB_HOST,
    port: env.DB_PORT,
    dialect: env.DB_DIALECT,
    dialectModule: require("mysql2"),
  },
  production: {
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    host: env.DB_HOST,
    port: env.DB_PORT,
    dialect: env.DB_DIALECT,
    dialectModule: require("mysql2"),
  },
};
