const pool = require('./config/connection')

pool.query(`
    CREATE TABLE students (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(50),
        last_name VARCHAR(50),
        email VARCHAR(50)
    )
`, (err, res) => {
    if(err) {
        throw err
    } else {
        console.log('students table: OK')
    }
})

pool.query(`
    CREATE TABLE teachers (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(50),
        last_name VARCHAR(50),
        email VARCHAR(50)
    )
`, (err, res) => {
    if(err) {
        throw err
    } else {
        console.log('teachers table: OK')
    }
})

pool.query(`
    CREATE TABLE subjects (
        id SERIAL PRIMARY KEY,
        subject_name VARCHAR (50)
    )
`, (err, res) => {
    if(err) {
        throw err
    } else {
        console.log('subjects table: OK')
    }
})