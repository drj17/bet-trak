require('dotenv').config();

module.exports = {
  type: 'postgres',
  port: 5432,
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  logging: true,
  ssl: process.env.DATABASE_SSL,
  entities: ['dist/**/*.entity.js'],
};