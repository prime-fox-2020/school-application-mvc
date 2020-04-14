const pool = require('./config/connection')

const queryStudent = `
    CREATE TABLE student (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR,
        last_name VARCHAR(125) NOT NULL,
        email VARCHAR,
        gender VARCHAR(20),
        birth_date VARCHAR
    )
`

const queryTeacher = `
    CREATE TABLE teacher (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR,
        last_name VARCHAR(125) NOT NULL,
        email VARCHAR,
        gender VARCHAR(20)

    )
`

const querySubject = `
    CREATE TABLE subject (
        id SERIAL PRIMARY KEY,
        subject_name VARCHAR
      
    )
`

pool.query(queryStudent, err => {
    if (err) throw err
    else console.log('Sukses membuat table Student');
    pool.end()
})

pool.query(queryTeacher, err => {
    if (err) throw err
    else console.log('Sukses membuat table Teacher');
})

pool.query(querySubject, err => {
    if (err) throw err
    else console.log('Sukses membuat table Subject');
})