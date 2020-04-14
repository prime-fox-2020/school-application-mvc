const {Pool} = require('pg')

const pool = new Pool({
    user : 'postgres',
    password: 'bismillah',
    database: 'school',
    host: 'localhost',
    port: 5432
})

module.exports = pool