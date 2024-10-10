import { Model, DataTypes, BelongsTo } from 'sequelize';
import connection from '../../config/connection';

const initKategoriKegiatan = (sequelize, Types) => {
  class KategoriKegiatan extends Model {}

  KategoriKegiatan.init({
    nama: Types.STRING,
    slug: Types.STRING,
  }, {
    sequelize,
    modelName: 'KategoriKegiatan',
    tableName: 'KategoriKegiatan',
    timestamps: false
  });

  return KategoriKegiatan;
};

export default initKategoriKegiatan(connection, DataTypes)
