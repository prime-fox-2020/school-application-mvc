const pool = require('./config/connection')
const fs = require('fs')

class Seeding {
    static students() {
        fs.readFile('./data/students.json', 'utf8', (err, data) => {
            if (err) {
                console.log(err)
            } else {
                data = JSON.parse(data)
                let query = `INSERT INTO students (first_name, last_name, email) VALUES `
                for (let i = 0; i < data.length; i++) {
                    query += `('${data[i].first_name}', '${data[i].last_name}', '${data[i].email}')`
                    if (i < data.length - 1) {
                        query += ', '
                    }
                }

                pool.query(query, (err) => {
                    if(err){
                        throw err
                    } 
                    else {
                        console.log('Students: OK')
                    }
                })
            }
        })
    }

    static teachers() {
        fs.readFile('./data/teachers.json', 'utf8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                data = JSON.parse(data)
                let query = `INSERT INTO teachers (first_name, last_name, email) VALUES `
                for (let i = 0; i < data.length; i++) {
                    query += `('${data[i].first_name}', '${data[i].last_name}', '${data[i].email}')`
                    if (i < data.length - 1) {
                        query += ', '
                    }
                }

                pool.query(query, (err) => {
                    if (err) {
                        throw(err)
                    } else {
                        console.log('Teachers: OK');
                    }
                })
            }
        })
    }

    static subjects() {
        fs.readFile('./data/subjects.json', 'utf8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                data = JSON.parse(data)
                let query = `INSERT INTO subjects (subject_name) VALUES `
                for (let i = 0; i < data.length; i++) {
                    query += `('${data[i].subject_name}')`
                    if (i < data.length - 1) {
                        query += ', '
                    }
                }

                pool.query(query, (err) => {
                    if (err) {
                        throw err
                    } else {
                        console.log('Subjects: OK');
                    }
                })
            }
        })
    }
}


Seeding.students()
Seeding.teachers()
Seeding.subjects()