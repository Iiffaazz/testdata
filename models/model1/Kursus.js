import { Model, DataTypes, BelongsTo } from 'sequelize';
import connection from '../../config/connection';
import Pengguna from './Pengguna';

const initCourse = (sequelize, Types) => {
  class Course extends Model {}

  Course.init({
    penggunaId: {
      type: Types.INTEGER,
      references: {
        model: 'Pengguna',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    poster: Types.STRING,
    judul: Types.STRING,
    tanggal_mulai: Types.DATEONLY,
    tanggal_selesai: Types.DATEONLY,
    deskripsi: Types.TEXT,
    kategori: Types.STRING,
    kapasitas: Types.INTEGER
  }, {
    sequelize,
    modelName: 'Course',
    tableName: 'Courses',
    timestamps: false
  });

  Course.belongsTo(Pengguna, { foreignKey: 'penggunaId' });

  return Course;
};

export default initCourse(connection, DataTypes)
