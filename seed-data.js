const pool = require('./config/connection');
const fs = require('fs');

//masukkan data dari teacher.json ke tabel teacher
let queryT = 'INSERT INTO teachers (first_name, last_name, email, gender) VALUES ';
fs.readFile('./data/teachers.json', (err, data) => {
    if (err) throw err;
    const result = JSON.parse(data);
    queryT += result.map(teacher => `('${teacher.first_name}', '${teacher.last_name}', '${teacher.email}', '${teacher.gender}')`).join(',');
    pool.query(queryT, (err) => {
        if (err) throw err;
        console.log('input data teachers success');
    });
});

//masukkan data dari students.json ke tabel students
let querySt = 'INSERT INTO students (first_name, last_name, email, gender, birth_date) VALUES ';
fs.readFile('./data/students.json', (err, data1) => {
    if (err) throw err;
    const result = JSON.parse(data1);
    querySt += result.map(student => `('${student.first_name}', '${student.last_name}', '${student.email}', '${student.gender}', '${student.birth_date}')`).join(',');
    pool.query(querySt, (err) => {
        if (err) throw err;
        console.log('input data students success');
    });
});

// masukkan data dari subjects.json ke tabel subjects
let querySb = 'INSERT INTO subjects (subject_name) VALUES ';
fs.readFile('./data/subjects.json', (err, data) => {
    if (err) throw err;
    let result = JSON.parse(data);
    querySb += result.map(subject => `('${subject.subject_name}')`).join(',');
    pool.query(querySb, (err) => {
        if (err) throw err;
        console.log('input data subjects success');
        pool.end();
    });
});