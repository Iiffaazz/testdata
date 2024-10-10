import { Model, DataTypes } from 'sequelize';
import connection from '../../config/connection';
import crypto from 'crypto';

const SECRET_KEY = process.env.ENCRYPTION_KEY; // Pastikan kunci ini aman dan unik

class OtpSession extends Model {}

OtpSession.init({
  email: DataTypes.STRING,
  otp: {
    type: DataTypes.STRING,
    get() {
      const encryptedOtp = this.getDataValue('otp');
      const decipher = crypto.createDecipher('aes-256-cbc', SECRET_KEY);
      let decrypted = decipher.update(encryptedOtp, 'hex', 'utf8');
      decrypted += decipher.final('utf8');
      return decrypted;
    },
    set(value) {
      const cipher = crypto.createCipher('aes-256-cbc', SECRET_KEY);
      let encrypted = cipher.update(value, 'utf8', 'hex');
      encrypted += cipher.final('hex');
      this.setDataValue('otp', encrypted);
    }
  },
  expiresAt: DataTypes.BIGINT,
  status: {
    type: DataTypes.STRING,
    defaultValue: 'belum verifikasi' // Status bisa 'active', 'verified', atau 'expired'
  },
  createdAt: DataTypes.DATE
}, {
  sequelize: connection,
  modelName: 'OtpSession',
  tableName: 'OtpSessions',
  timestamps: false
});

export default OtpSession;
