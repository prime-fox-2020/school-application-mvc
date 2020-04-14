const pool = require('./config/connection.js')
const fs = require('fs')
 

let queryStudents = `
INSERT INTO students (first_name, last_name, email, gender, birth_date) 
VALUES`

fs.readFile('./data/students.json', 'utf8', (err, data) => {
    data = JSON.parse(data)
    
    queryStudents += data.map(student => `('${student.first_name}', '${student.last_name}', '${student.email}', '${student.gender}', '${student.birth_date}')`).join(', ')
    
    console.log(queryStudents);
        
    pool.query(queryStudents, (err, res) => {
        if (err) {
            console.log(err)
        } else {
            console.log('berhasil melakukan seeding data Students');
            pool.end()
        }
    })    
})


let queryTeachers = `
INSERT INTO teachers (first_name, last_name, email, gender) 
VALUES`

fs.readFile('./data/teachers.json', 'utf8', (err, data) => {
    data = JSON.parse(data)
    queryTeachers += data.map(teacher => `('${teacher.first_name}', '${teacher.last_name}', '${teacher.email}', '${teacher.gender}')`).join(', ')
    pool.query(queryTeachers, (err, res) => {
        if (err) {
            console.log(err)
        } else {
            console.log('berhasil melakukan seeding data Teachers');
            pool.end()
        }
    })    
})

let querySubjects = `
INSERT INTO subjects (subject_name) 
VALUES`

fs.readFile('./data/subjects.json', 'utf8', (err, data) => {
    data = JSON.parse(data)
    querySubjects += data.map(subject => `('${subject.subject_name}')`).join(', ')
    pool.query(querySubjects, (err, res) => {
        if (err) {
            console.log(err)
        } else {
            console.log('berhasil melakukan seeding data subjects');
            pool.end()
        }
    })    
})
