import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config(); 


const dbName = process.env.DB_NAME || '';
const dbUser = process.env.DB_USER || '';
const dbPassword = process.env.DB_PASSWORD || '';
const dbHost = process.env.DB_HOST || 'localhost';
const dbPort = process.env.DB_PORT || '3306';

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: 'mysql',
  host: dbHost,
  port: parseInt(dbPort, 10),
});

export default sequelize;
