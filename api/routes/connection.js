const pg = require('pg');

const config = {
  user: 'jaman',
  database: 'questioner',
  password: '123',
  port: 5432
};
const pool = new pg.Pool(config);

module.exports = pool;
