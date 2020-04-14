const pool = require('../config/connection')
const fs = require('fs')

class SubjectsModel{
    static getSubjects(callback) {
        // this.read((err, data) => {
        //     if(err){
        //         callback(err)
        //     } else {
        //         callback(null, data)
        //     }
        // })

        const querySelect = `SELECT * FROM subjects ORDER BY id asc `
        pool.query(querySelect, (err, data) => {
            if(err){
                callback(err, null)
            } else {
                callback(null, data.rows)
            }
        })
    }

    static read(callback) {
        fs.readFile('./data/subjects.json', 'utf8', (err, data) => {
            if(err) {
                callback(err)
            } else {
                callback(null, JSON.parse(data))
            }
        })
    }

    static idSubjects(id, callback) {
        // this.getSubjects((err, data) => {
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
        const queryId = `SELECT * FROM subjects where id = '${id}'`
        pool.query(queryId, (err, res) => {
            if(err) {
                callback(err)
            } else {
                callback(null, res.rows)
            }
        }) 
    }
}

module.exports = SubjectsModel