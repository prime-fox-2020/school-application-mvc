const pool = require('./config/config')
const fs = require('fs')

let queryTeacher= `
    INSERT INTO teacher (first_name, last_name, email, gender) VALUES `

fs.readFile('./data/teacher.json', (err, data)=> {
    let results = JSON.parse(data)

    queryTeacher += results.map(teacher => `('${teacher.first_name}' , '${teacher.last_name}', '${teacher.email}', '${teacher.gender}')`).join(', ')
    // console.log(queryTeacher)
    pool.query(queryTeacher, err => {
        if(err) throw(err)
        else console.log(`berhasil melakukan seeding teacher`)
    })
})

let queryStudent = `
    INSERT INTO student (first_name, last_name, email, gender, birth_date) VALUES `

fs.readFile('./data/student.json', (err,data) => {
    let results = JSON.parse(data)

    queryStudent += results.map(student => `('${student.first_name}', '${student.last_name}', '${student.email}', '${student.gender}', '${student.birth_date}')`).join(', ')
    // console.log(queryStudent)
    pool.query(queryStudent, err => {
        if (err) throw(err)
        else console.log(`berhasil melakukan seeding student`)
    })
})

let querySubject = `
    INSERT INTO subject (subject_name) VALUES `

fs.readFile('./data/subject.json', (err,data) => {
    let results = JSON.parse(data)

    querySubject += results.map(subject => `('${subject.subject_name}')`).join(', ')
    // console.log(querySubject)
    pool.query(querySubject, err => {
        if(err) throw(err)
        else console.log(`berhasil melakukan seeding subject`)
        pool.end()
    })
})