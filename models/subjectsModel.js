// const fs = require('fs')
const pool = require('../config/connection')
class SubjectModel {
    constructor(id, subject_name){
        this.id = id
        this.subject_name = subject_name
    }
    
    static getSubjects(callback){
        pool.query(`SELECT * FROM subjects ORDER BY id ASC`, (err, data) => {
            if(err){
                callback(err, null)
            }
            else{
                callback(null, data.rows)
            }
        })
    }

    static getId(id, callback){
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

module.exports = SubjectModel