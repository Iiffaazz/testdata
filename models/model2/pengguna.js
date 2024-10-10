import { Model, DataTypes, BelongsTo } from 'sequelize';
import connection from '../../config/connection';
import Roles from './Roles';

const initPengguna = (sequelize, Types) => {
  class Pengguna extends Model {}

  Pengguna.init({
    nama: Types.STRING,
    email: Types.STRING,
    alamat: Types.STRING,
    walletAddress: Types.STRING,
    status: {
      type: Types.ENUM('Belum Aktif', 'Aktif'),
      defaultValue: 'Belum Aktif'
    },
    roleId: {
      type: Types.INTEGER,
      references: {
        model: 'Roles',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
  }, {
    sequelize,
    modelName: 'Pengguna',
    tableName: 'Pengguna',
    timestamps: true
  });

  Pengguna.belongsTo(Roles, { foreignKey: 'roleId' });

  return Pengguna;
};

export default initPengguna(connection, DataTypes)
