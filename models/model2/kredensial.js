import { Model, DataTypes } from 'sequelize';
import connection from '../../config/connection';
import Pengguna from './Pengguna';
import Peserta from './Peserta';
import Kegiatan from './Kegiatan';

const initKredensial = (sequelize, Types) => {
  class Kredensial extends Model {}

  Kredensial.init({
    penggunaId: {
      type: Types.INTEGER,
      references: {
        model: 'Pengguna',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    pesertaId: {
      type: Types.INTEGER,
      references: {
        model: 'Peserta',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    kegiatanId: {
      type: Types.INTEGER,
      references: {
        model: 'Kegiatan',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    tanggalDikeluarkan: Types.DATEONLY,
    statusAbsen: {
      type: Types.ENUM('Belum Absen', 'Sudah Absen'),
      defaultValue: 'Belum Absen'
    }, 
    statusMinting: {
     type: Types.ENUM('Not Minted', 'Minted', 'Claimed'),
      defaultValue: 'Not Minted'
    },
  }, {
    sequelize,
    modelName: 'Kredensial',
    tableName: 'Kredensial',
    timestamps: false
  });

  Kredensial.belongsTo(Pengguna, { foreignKey: 'penggunaId' });
  Kredensial.belongsTo(Peserta, { foreignKey: 'pesertaId' });
  Kredensial.belongsTo(Kegiatan, { foreignKey: 'kegiatanId' });

  return Kredensial;
};

export default initKredensial(connection, DataTypes)
