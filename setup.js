const pool = require('./connection.js')

const teacher = `
    CREATE TABLE IF NOT EXISTS teacher(
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(15),
        last_name VARCHAR(15),
        email VARCHAR(30),
        gender VARCHAR(10)
    )
`
const subject = `
        CREATE TABLE IF NOT EXISTS subject(
        id SERIAL PRIMARY KEY,
        subject_name VARCHAR(15)
    )
`
const student =`
        CREATE TABLE IF NOT EXISTS student(
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(15),
        last_name VARCHAR(15),
        email VARCHAR(30),
        gender VARCHAR(10),
        birth_date VARCHAR(30)
    )
`
pool.query(teacher, err =>{
    if(err){
        throw err
    } else{
        console.log('Table teacher created')
    }
})
pool.query(subject, err =>{
    if(err){
        throw err
    } else{
        console.log('Table subject created')
    }
})
pool.query(student, err =>{
    if(err){
        throw err
    } else{
        console.log('Table student created')
    }
})