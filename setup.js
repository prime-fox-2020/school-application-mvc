const pool = require('./config/connection')

let queryTeacher = `
    CREATE TABLE IF NOT EXISTS teacher (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(50),
        last_name VARCHAR(50),
        email VARCHAR(50),
        gender VARCHAR(10)
    );`

pool.query(queryTeacher, err => {
    if (err) throw err
    else console.log(`berhasil membuat table teacher`)
})

let queryStudent = `
    CREATE TABLE IF NOT EXISTS student (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(50),
        last_name VARCHAR(50),
        email VARCHAR(50),
        gender VARCHAR(10),
        birth_date VARCHAR(20)
    );`

pool.query(queryStudent, err => {
    if (err) throw err
    else console.log(`berhasil membuat table student`)
})

let querySubject = `
    CREATE TABLE IF NOT EXISTS subject (
        id SERIAL PRIMARY KEY,
        subject_name VARCHAR(25)
    );`

pool.query(querySubject, err => {
    if(err) throw err
    else console.log(`berhasil membuat table subject`)
    pool.end()
})