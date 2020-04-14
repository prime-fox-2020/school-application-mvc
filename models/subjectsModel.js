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
}

module.exports = SubjectsModel