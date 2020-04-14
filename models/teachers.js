const pool = require('../config/connection')

class TeachersModel {
    
    static getAll(callback) {
        pool.query(`SELECT * FROM teachers ORDER BY id ASC`, (err, data) => {
            if(err){
                callback(err, null)
            }
            else{
                callback(null, data.rows)
            }
        })
    }

    static getByID(id, callback) {
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