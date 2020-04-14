const pool = require('../config/connection')

class TeachersModel {
    constructor(id, firstName, lastName, email, gender, birthDate){
        this.id = id
        this.first_name = firstName
        this.last_name = lastName
        this.email = email
        this.gender = gender
        this.birth_date = birthDate
    }
    
    static getTeachers(callback){
        pool.query(`SELECT * FROM teachers ORDER BY id ASC`, (err, data) => {
            if(err){
                callback(err, null)
            }
            else{
                callback(null, data.rows)
            }
        })
    }

    static getId(id, callback){
        pool.query(`SELECT * FROM teachers WHERE id = ${id}`, (err, res) => {
            if(err){
                callback(err, null)
            }
            else{
                callback(null, res.rows)
            }
        })
    }
}

module.exports = TeachersModel