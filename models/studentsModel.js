const fs = require("fs")
const pool = require("../connection/config")
// const Convert = require("../convertTime")


class studentsModels {
    static showStudents(callback) {

        const query = `
            SELECT * FROM students
            ORDER BY id ASC
        `

        pool.query(query, (err, results) => {
            if (err) {
                callback(err, null)
            } else {
                for (let i = 0; i < results.rows.length; i++) {
                    results.rows[i].birth_date = results.rows[i].birth_date.toISOString().slice(0, 10)
                    // console.log(results.rows[i])
                }
                callback(null, results.rows)
            }
        })
    }

    static findStudentByEmail(email, callback) {
        const query = `
            SELECT * FROM students
            WHERE email = $1
        `
        // console.log(email)
        let params = [email]
        pool.query(query, params,(err, results) => {
            if (err) {
                callback(err, null)
            } else {
                // console.log(results)
                callback(null, results.rows)
            }
        })
    }

    static postAddStudentsData(req, callback) {
        // console.log(req)
        const query = `
                INSERT INTO students (first_name,last_name,email,gender,birth_date) VALUES ($1,$2,$3,$4,$5)
        `
        let params = [req.first_name, req.last_name, req.email, req.gender, req.birthdate]
        pool.query(query, params, (err, results) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results.rows)
            }
        })

    }

    static editStudentById(id, callback) {

        const query = `
        SELECT * FROM students WHERE id = $1
        `
        let params = [id]
        pool.query(query, params, (err, results) => {
            if (err) {
                callback(err, null)
            } else {
                results.rows[0].birth_date = results.rows[0].birth_date.toISOString().slice(0, 10)
                // console.log(results.rows[0])
                callback(null, { student: results.rows[0] })
            }
        })

    }

    static postAfterEdit(req, id, callback) {
        // console.log(id)
        const query = `
                UPDATE students SET first_name = $1, last_name = $2, email = $3, gender = $4, birth_date = $5 WHERE id = $6
        `
        let params = [req.first_name, req.last_name, req.email, req.gender, req.birthdate, id]
        pool.query(query, params, (err, results) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results.rows)
            }
        })
    }

    static deleteStudentsData(id, callback) {
        const query = `
            DELETE FROM students WHERE id = $1
        `

        let params = [id]
        pool.query(query, params, (err, results) => {
            if(err){
                callback(err, null)
            }else{
                callback(null,results.rows)
            }
        })
    }
}

module.exports = studentsModels