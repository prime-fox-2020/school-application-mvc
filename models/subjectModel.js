const fs = require('fs')

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
        this.readFileJson((err, data) => {
            if (err){
                callback(err,null)
            } else{
                callback(null,data)
            }
        })
    }

    static getSubjectIdList(subjectId, callback){
        this.readFileJson((err,data) => {
            if(err){
                callback(err,null)
            } else {
                let subjectList = []
                data.forEach(item =>{
                    if(item.id == subjectId){
                        subjectList.push(item)
                    }
                })
                callback(null,subjectList)
            }
        })
    }
}

module.exports = SubjectModel