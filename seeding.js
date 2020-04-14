const pool = require('./config/connection')
const fs = require('fs')

// let queryStudent = `
//     INSERT INTO student (first_name, last_name, email, gender, birth_date) VALUES
// `

// fs.readFile('./students.json', (err, result) => {
//     result = JSON.parse(result)

//     queryStudent += result.map(student => `('${student.first_name}','${student.last_name}','${student.email}','${student.gender}','${student.birth_date}')`).join(', ')
//     // console.log(queryStudent);
//     pool.query(queryStudent, err => {
//         if (err) throw err
//         else console.log('Berhasil melakukang seeding student');
//         pool.end()
//     })
// })

// let queryTeacher = `
//     INSERT INTO teacher (first_name, last_name, email, gender) VALUES
// `

// fs.readFile('./teachers.json', (err, result) => {
//     result = JSON.parse(result)

//     queryTeacher += result.map(teacher => `('${teacher.first_name}','${teacher.last_name}','${teacher.email}','${teacher.gender}')`).join(', ')
//     // console.log(queryTeacher);
//     pool.query(queryTeacher, err => {
//         if (err) throw err
//         else console.log('Berhasil melakukang seeding teacher');
//         pool.end()
//     })
// })

let querySubject = `
    INSERT INTO subject (subject_name) VALUES
`

fs.readFile('./subjects.json', (err, result) => {
    result = JSON.parse(result)

    querySubject += result.map(subject => `('${subject.subject_name}')`).join(', ')
    // console.log(querySubject);
    pool.query(querySubject, err => {
        if (err) throw err
        else console.log('Berhasil melakukang seeding subject');
        pool.end()
    })
})