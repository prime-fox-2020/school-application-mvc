const fs = require('fs')
const pool = require('../config/config')

class SubjectModel{
    static readFileJson(callback){
        fs.readFile('./data/subject.json','utf-8', (err,data) => {
            if(err){
                callback(err,null)
            } else {
                callback(null, JSON.parse(data))
            }
        })
    }

    static getSubjectList(callback){
        // this.readFileJson((err, data) => {
        //     if (err){
        //         callback(err,null)
        //     } else{
        //         callback(null,data)
        //     }
        // })
        const query = `SELECT * FROM subject`
        pool.query(query, (err,result)=> {
            if(err){
                callback(err,null)
            } else {
                callback(null, result.rows)
            }
        })
    }

    static getSubjectIdList(subjectId, callback){
        // this.readFileJson((err,data) => {
        //     if(err){
        //         callback(err,null)
        //     } else {
        //         let subjectList = []
        //         data.forEach(item =>{
        //             if(item.id == subjectId){
        //                 subjectList.push(item)
        //             }
        //         })
        //         callback(null,subjectList)
        //     }
        // })
        const query = `SELECT * FROM subject WHERE id = $1`
        const param = [subjectId]
        pool.query(query, param,(err,result)=> {
            if(err){
                callback(err,null)
            } else {
                callback(null, result.rows)
            }
        })
    }
}

module.exports = SubjectModel