const pool = require('./config/sql')


const query = `
CREATE TABLE IF NOT EXISTS teachers (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(125) NOT NULL,
  last_name VARCHAR (125),
  email VARCHAR,
  gender VARCHAR
)`

pool.query(query , err =>{
  if(err)throw err
  else console.log('sukses membuat table teacher')
})

const student = `
CREATE TABLE IF NOT EXISTS students (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(125) NOT NULL,
  last_name VARCHAR (125),
  email VARCHAR,
  gender VARCHAR,
  birth_date VARCHAR
)`

pool.query(student, err =>{
  if(err)throw err
  else console.log('suskes membuat table students')
})


const subjects = `
CREATE TABLE IF NOT EXISTS subjects (
  id SERIAL PRIMARY KEY,
  subject_name VARCHAR
)`

pool.query(subjects, err =>{
  if(err)throw err
  else console.log('suskes membuat table subjects')
})



