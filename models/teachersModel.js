const pool = require('../config/connection')
const fs = require('fs')

class TeachersModel{
    static getteachers(callback) {
        // this.read((err, data) => {
        //     if(err){
        //         callback(err)
        //     } else {
        //         callback(null, data)
        //     }
        // })
        const querySelect = `SELECT * FROM teachers ORDER BY id asc `
        pool.query(querySelect, (err, data) => {
            if(err){
                callback(err, null)
            } else {
                callback(null, data.rows)
            }
        })
    }

    static read(callback) {
        fs.readFile('./data/teachers.json', 'utf8', (err, data) => {
            if(err) {
                callback(err)
            } else {
                callback(null, JSON.parse(data))
            }
        })
    }

    static idTeachers(id, callback) {
        // this.getteachers((err, data) => {
        //     if(err) {
        //         callback(err)
        //     } else {
        //         let result = []

        //         for(let i=0; i<data.length; i++){
        //             if(Number(id) === data[i].id) {
        //                 result.push(data[i])
        //             }
        //         }

        //         callback(null, result)
        //     }
        // })

        const queryId = `SELECT * FROM teachers where id = '${id}'`
        pool.query(queryId, (err, res) => {
            if(err) {
                callback(err)
            } else {
                callback(null, res.rows)
            }
        })
    }
}

module.exports = TeachersModel