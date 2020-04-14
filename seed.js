const pool = require('./connection.js')
const fs = require ('fs')

let teacher = JSON.parse(fs.readFileSync('./teachers.json', 'utf8'))
let student = JSON.parse(fs.readFileSync('./students.json', 'utf8'))
let subject = JSON.parse(fs.readFileSync('./subjects.json', 'utf8'))

// console.log(teacher)
// console.log(student)
// console.log(subject)

for (let i = 0; i < teacher.length; i++) {
    pool.query(`
        INSERT INTO teacher (first_name, last_name, email, gender)
        VALUES ('${teacher[i].first_name}', '${teacher[i].last_name}', '${teacher[i].email}', '${teacher[i].gender}')`)
}

for (let i = 0; i < student.length; i++) {
    pool.query(`
        INSERT INTO student (first_name, last_name, email, gender, birth_date)
        VALUES ('${student[i].first_name}', '${student[i].last_name}', '${student[i].email}', '${student[i].gender}', '${student[i].birth_date}')`)
}

for (let i = 0; i < subject.length; i++) {
    pool.query(`
        INSERT INTO subject (subject_name)
        VALUES ('${subject[i].subject_name}')`)
}