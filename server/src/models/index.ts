import { Sequelize, DataTypes } from 'sequelize';
import dotenv from 'dotenv';
import taskModel from './task';

type Dialect = 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql';

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME || '', process.env.DB_USER || '', process.env.DB_PASSWORD || '', {
  host: process.env.DB_HOST || '',
  dialect: (process.env.DB_DIALECT as Dialect) || 'postgres',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

(async () => {
  await sequelize.sync();
  console.log('Database schema synchronized');
})();

const db: any = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Task = taskModel(sequelize, DataTypes); // Load the Task model

export default db;
