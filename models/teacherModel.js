const fs = require('fs')

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
        this.readFileJson((err,data) => {
            if (err){
                callback(err,null)
            } else {
                // console.log("masuk else teacher list")
                callback(null,data)
            }
        })
    }

    static getTeacherIdList(teacherId, callback){
        this.readFileJson((err,data) => {
            if (err){
                callback(err,null)
            } else {
                let teacherList = []
                data.forEach(item => {
                    if (item.id == teacherId){
                        teacherList.push(item)
                    }
                })
                // console.log(teacherList)
                callback(null,teacherList)
            }
        })
    }
    
}

module.exports = TeacherModel