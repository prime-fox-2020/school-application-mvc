const fs = require('fs')
const pool = require('./db/connection')

fs.readFile('./db/students.json', 'utf8', (err, data) => {
  if (err) { 
    throw err
  } else {
    let queryStudent = `
      INSERT INTO students (firstName, lastName, gender, email)
      VALUES 
    `
    queryStudent += JSON.parse(data).map(el => `('${el.first_name}', '${el.last_name}', '${el.gender}', '${el.email}')`).join(', ')
    pool.query(queryStudent, err => {
      if (err) {
        throw err
      } else {
        console.log('Successfully seeding students table')
      }
    })
  }
})

fs.readFile('./db/teachers.json', 'utf8', (err, data) => {
  if (err) {
    throw err
  } else {
    let queryTeachers = `
  INSERT INTO teachers (firstName, lastName, gender, email)
  VALUES 
`
    queryTeachers += JSON.parse(data).map(el => `('${el.first_name}', '${el.last_name}', '${el.gender}', '${el.email}')`).join(', ')
    pool.query(queryTeachers, err => {
      if (err) {
        throw err
      } else {
        console.log('Successfully seeding teachers table')
      }
    })
  }
})


fs.readFile('./db/subjects.json', 'utf8', (err, data) => {
  if (err) {
    throw err
  } else {
    let querySubjects = `
  INSERT INTO subjects (subjectName)
  VALUES 
`
    querySubjects += JSON.parse(data).map(el => `('${el.subject_name}')`).join(', ')
    pool.query(querySubjects, err => {
      if (err) {
        throw err
      } else {
        console.log('Successfully seeding subjects table')
        pool.end()
      }
    })
  }
})
