const fs = require('fs')

class TeachersModel {
    static getTeachersData(callback) {
        this.open((err, data) => {
            if(err) {
                callback(err, null)
            } else(
                callback(null, data)
            )
        })
    }

    static open(callback) {
        fs.readFile('./teachers.json', 'utf8', (err, data) => {
            if(err) {
                callback(err, null)
            } else {
                callback(null, JSON.parse(data))
            }
        })
    }
}

module.exports = TeachersModel