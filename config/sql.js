const { Pool } = require('pg')

const pool = new Pool({
  user: 'airell',
  host: 'localhost',
  database: 'template',
  password: 'tauhidjannah',
  port: 5432,
})

module.exports = pool;

