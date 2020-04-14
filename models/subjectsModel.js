const fs = require('fs')

class SubjectsModel{
    static getSubjects(callback) {
        this.read((err, data) => {
            if(err){
                callback(err)
            } else {
                callback(null, data)
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
        this.getSubjects((err, data) => {
            if(err) {
                callback(err)
            } else {
                let result = []

                for(let i=0; i<data.length; i++){
                    if(Number(id) === data[i].id) {
                        result.push(data[i])
                    }
                }

                callback(null, result)
            }
        })
    }
}

module.exports = SubjectsModel