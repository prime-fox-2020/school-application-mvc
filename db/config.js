const {Pool} = require('pg');

const pool = new Pool ({
    user: 'postgres',
    host: 'localhost',
    database: 'school',
    password: 'ArtiHidup102938',
    port: 5432
});

module.exports = pool;