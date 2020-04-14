const fs = require('fs')
const pool = require('../config/config')

class TeacherModel{
    static readFileJson(callback){
        fs.readFile('./data/teacher.json','utf-8',(err,data) => {
            if (err){
                callback(err,null)
            } else {
                callback(null,JSON.parse(data))
            }
        })
    }

    static getTeacherList(callback){
        // this.readFileJson((err,data) => {
        //     if (err){
        //         callback(err,null)
        //     } else {
        //         // console.log("masuk else teacher list")
        //         callback(null,data)
        //     }
        // })
        const query = `SELECT * FROM teacher`

        pool.query(query, (err,result)=>{
            if(err){
                callback(err,null)
            } else {
                callback(null, result.rows)
            }
        })
    }

    static getTeacherIdList(teacherId, callback){
        // this.readFileJson((err,data) => {
        //     if (err){
        //         callback(err,null)
        //     } else {
        //         let teacherList = []
        //         data.forEach(item => {
        //             if (item.id == teacherId){
        //                 teacherList.push(item)
        //             }
        //         })
        //         // console.log(teacherList)
        //         callback(null,teacherList)
        //     }
        // })
        const query = `SELECT * FROM teacher WHERE id = $1`
        const param = [teacherId]
        pool.query(query,param, (err,result)=>{
            if(err){
                callback(err,null)
            } else {
                callback(null, result.rows)
            }
        })
    }
    
}

module.exports = TeacherModel