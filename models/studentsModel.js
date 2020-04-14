const pool = require('../config/connection')

class StudentModel {
    // constructor(id, firstName, lastName, email, gender, birthDate) {
    //     this.id = id
    //     this.first_name = firstName
    //     this.last_name = lastName
    //     this.email = email
    //     this.gender = gender
    //     this.birth_date = birthDate
    // }

    static getStudents(callback) {
        pool.query(`SELECT * FROM students ORDER BY id ASC`, (err, data) => {
            if(err){
                callback(err, null)
            }
            else{
                callback(null, data.rows)
            }
        })
    }

    static add(data, callback) {
        const query = `INSERT INTO students (first_name, last_name, email, gender, birth_date)
            VALUES ($1, $2, $3, $4, $5)`

        const params = [ data.firstName, data.lastName, data.email, data.gender, data.birthDate ] 

        pool.query(query, params, (err) => {
            if(err) {
                callback(err)
            }
            else{
                callback(null, 'succes')
            }
        })
    }

    static delete(id, callback) {
        const query = `DELETE FROM students WHERE id = ${id}`
        pool.query(query, (err) => {
            if(err) {
                callback(err)
            }
            else {
                callback(null, 'succes')
            }
        })
    }

    static getEdit(id, callback){
        const query = `SELECT * FROM students WHERE id = $1`

        const params = [id]

        pool.query(query, params, (err, data) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, data.rows)
            }
        })
    }

    static update(id, data, callback) {
        const query = `UPDATE students SET first_name = $1, last_name = $2, email = $3, birth_date = $4 WHERE id = ${id}`

        const params = [data.firstName, data.lastName, data.email, data.birthDate]
        pool.query(query, params, (err) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, `Student with id ${data.id} has been edited !`)
            }
        })
    }

    static getEmail(email, callback){
        pool.query(`SELECT * FROM students WHERE email = '${email}'`, (err, res) => {
            if(err){
                callback(err, null)
            }
            else{
                callback(null, res.rows)
            }
        })
    }
}

module.exports = StudentModel