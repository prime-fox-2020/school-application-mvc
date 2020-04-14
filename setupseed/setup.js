const pool = require('../config/connection')

const queryStudents = `CREATE TABLE students (
    id SERIAL,
    first_name VARCHAR(15),
    last_name VARCHAR(15),
    email VARCHAR(30),
    gender VARCHAR(15),
    birth_date VARCHAR (25)
)`

const queryTeachers = `CREATE TABLE teachers (
    id SERIAL,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    email VARCHAR(20),
    gender VARCHAR(20)
)`

const querySubjects = `CREATE TABLE subjects (
    id SERIAL,
    subject_name VARCHAR(20)
)`

// pool.query(queryStudents, (err) =>{
//     if(err) console.log(err)
//     else console.log('Table students created.')
// })

// pool.query(queryTeachers, (err) =>{
//     if(err) console.log(err)
//     else console.log('Table teachers created.')
// })

// pool.query(querySubjects, (err) =>{
//     if(err) console.log(err)
//     else console.log('Table subjects created.')
// })