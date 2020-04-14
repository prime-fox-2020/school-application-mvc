const fs = require('fs')

class StudentsModel {
    static getData(callback) {
        this.open((err, data) => {
            if(err) {
                callback(err, null)
            } else {
                callback(null, data)
            }
        })
    }

    static open(callback) {
        fs.readFile('./students.json', 'utf8', (err, data) => {
            if(err) {
                callback(err, null)
            } else {
                callback(null, JSON.parse(data))
            }
        })
    }
}


module.exports = StudentsModel