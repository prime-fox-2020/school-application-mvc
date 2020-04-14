const pool = require('./config/connection')


const queryStudents =  `
  CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    email VARCHAR(50) NOT NULL,
    gender VARCHAR(10),
    birth_date VARCHAR(30)
  )
`

const queryTeachers =  `
  CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    email VARCHAR(50) NOT NULL,
    gender VARCHAR(10),
  )
`

const querySubjects =  `
  CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
    subject_name VARCHAR(30)
  )
`

pool.query(queryStudents,(err, res) => {
  if(err) {
    console.log(err) 
  } else {
    console.log('sukses membuat tabel students')
    pool.query(queryTeachers, (err, res) => {
      if(err) {
        console.log(err) 
      } else {
        console.log('sukses membuat tabel teachers')
        pool.query(querySubjects, (err, res) => {
          if(err) {
            console.log(err)
          } else {
            console.log('sukses membuat tabel subjects')
            pool.end()
          }
        })
      }
    })
  }
})



