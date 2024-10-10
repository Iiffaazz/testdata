import { Model, DataTypes } from 'sequelize';
import connection from '../../config/connection';

const initPeserta = (sequelize, Types) => {
  class Peserta extends Model {}

  Peserta.init({
    did:Types.STRING,
    nama:Types.STRING,
    email:Types.STRING,
    walletAddress:Types.TEXT,
    pt:Types.TEXT,
    kodePt:Types.TEXT,
    prodi: Types.TEXT,
    statusDchain: Types.ENUM('Non Dchain User', 'Dchain User'),
    status: {
      type: Types.ENUM('Belum Aktif', 'Aktif'),
      defaultValue: 'Belum Aktif'
    },
  }, {
    sequelize,
    modelName: 'Peserta',
    tableName: 'Peserta',
    timestamps: true
  });

  return Peserta;
};

export default initPeserta(connection, DataTypes)
