const pool = require('../config/connection')

class SubjectsModel {
    
    static getAll(callback) {
        pool.query(`SELECT * FROM subjects ORDER BY id ASC`, (err, data) => {
            if(err){
                callback(err, null)
            }
            else{
                callback(null, data.rows)
            }
        })
    }

    static getByID(id, callback) {
        pool.query(`SELECT * FROM subjects WHERE id = ${id}`, (err, res) => {
            if(err){
                callback(err, null)
            }
            else{
                callback(null, res.rows)
            }
        })
    }
    
}

module.exports = SubjectsModel