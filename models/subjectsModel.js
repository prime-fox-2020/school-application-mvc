const fs = require('fs')

class SubjectModel {
    constructor(id, subject_name){
        this.id = id
        this.subject_name = subject_name
    }
    
    static getSubjects(callback){
        fs.readFile('./data/subjects.json', 'utf-8', (err, data) => {
            if (err) {
                callback(err, null)
            } else {
                let raw = JSON.parse(data)
                let temp = []
                raw.forEach(el => {
                    temp.push(new SubjectModel(el.id, el.subject_name))
                });
                callback(null, temp)
            }
        })
    }

    static getId(id, callback){
        fs.readFile('./data/subjects.json', 'utf8', (err, data) => {
            if(err){
                callback(err, null)
            } else {
                data = JSON.parse(data)
                let result = []
    
                for(let i = 0; i < data.length; i++){
                    if(Number(id) === data[i].id){
                        result.push(data[i])
                    }
                }
                callback(null, result)
            }
        })
    }
}

module.exports = SubjectModel