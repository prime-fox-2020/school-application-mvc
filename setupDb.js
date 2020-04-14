const pool = require('./db/connection')

let query = `
  CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(20) NOT NULL,
    lastName VARCHAR(20) NOT NULL,
    gender VARCHAR(6) NOT NULL,
    email VARCHAR(50) NOT NULL
  )
`
pool.query(query, err => {
  if (err) {
    throw err
  } else {
    console.log('Successfully create students table')
  }
})

query = `
  CREATE TABLE IF NOT EXISTS teachers (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(20) NOT NULL,
    lastName VARCHAR(20) NOT NULL,
    gender VARCHAR(6) NOT NULL,
    email VARCHAR(50) NOT NULL
  )
`
pool.query(query, err => {
  if (err) {
    throw err
  } else {
    console.log('Successfully create teachers table')
  }
})

query = `
  CREATE TABLE IF NOT EXISTS subjects (
    id SERIAL PRIMARY KEY,
    subjectName VARCHAR(50) NOT NULL
  )
`
pool.query(query, err => {
  if (err) {
    throw err
  } else {
    console.log('Successfully create subjects table')
    pool.end()
  }
})