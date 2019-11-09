require('dotenv').config();

module.exports = {
  type: 'postgres',
  port: 5432,
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  connectTimeout: 1500,
  logging: true,
  ssl: false,
  entities: ['dist/**/*.entity.js'],
};
