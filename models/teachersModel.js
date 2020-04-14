const fs = require('fs')

class TeachersModel{
    static getteachers(callback) {
        this.read((err, data) => {
            if(err){
                callback(err)
            } else {
                callback(null, data)
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
}

module.exports = TeachersModel