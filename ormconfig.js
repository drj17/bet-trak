require('dotenv').config();

module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: true,
  connectTimeout: 1500,
  logging: true,
  ssl: false,
  entities: ['dist/**/*.entity.js'],
};
