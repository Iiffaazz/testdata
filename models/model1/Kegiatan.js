import { Model, DataTypes, BelongsTo } from 'sequelize';
import connection from '../../config/connection';
import Pengguna from './Pengguna';
import KategoriKegiatan from './KategoriKegiatan';

const initKegiatan = (sequelize, Types) => {
  class Kegiatan extends Model {}

  Kegiatan.init({
    penggunaId: {
      type: Types.INTEGER,
      references: {
        model: 'Pengguna',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    kategoriId: {
      type: Types.INTEGER,
      references: {
        model: 'KategoriKegiatan',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    poster: Types.STRING,
    judul: Types.STRING,
    slug: Types.STRING,
    tanggalMulai: Types.DATEONLY,
    jamMulai: Types.TIME,
    tanggalSelesai: Types.DATEONLY,
    jamSelesai: Types.TIME,
    pembicara: Types.STRING,
    deskripsi: Types.TEXT,
    tipeKegiatan: Types.STRING,
    link: Types.STRING,
    tempat: Types.STRING,
    kapasitas: Types.INTEGER,
  }, {
    sequelize,
    modelName: 'Kegiatan',
    tableName: 'Kegiatan',
    timestamps: false
  });

  Kegiatan.belongsTo(Pengguna, { foreignKey: 'penggunaId' });
  Kegiatan.belongsTo(KategoriKegiatan, { foreignKey: 'kategoriId' });

  return Kegiatan;
};

export default initKegiatan(connection, DataTypes)
