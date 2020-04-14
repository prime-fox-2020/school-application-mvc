const pool = require('../config/connection')

class StudentsModel {

    static getAll(callback) {
        pool.query(`SELECT * FROM students ORDER BY id ASC`, (err, data) => {
            if(err){
                callback(err, null)
            }
            else{
                callback(null, data.rows)
            }
        })
    }

    static addProcess(data, callback) {
        const query = `INSERT INTO students (first_name, last_name, email) VALUES ($1, $2, $3)`
        const params = [data.first_name, data.last_name, data.email] 

        pool.query(query, params, (err) => {
            if(err) {
                callback(err)
            }
            else{
                callback(null, 'OK')
            }
        })
    }

    static deleteProcess(id, callback) {
        const query = `DELETE FROM students WHERE id = ${id}`
        pool.query(query, (err) => {
            if(err) {
                callback(err)
            }
            else {
                callback(null, 'OK')
            }
        })
    }

    static getOne(id, callback){
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

    static editProcess(id, data, callback) {
        const query = `UPDATE students SET first_name = $1, last_name = $2, email = $3 WHERE id = ${id}`
        const params = [data.first_name, data.last_name, data.email]

        pool.query(query, params, (err) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, `OK`)
            }
        })
    }

    static getByEmail(email, callback){
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

module.exports = StudentsModel