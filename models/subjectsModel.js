const fs = require('fs')

class SubjectModel {
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
        fs.readFile('./subjects.json', 'utf8', (err, data) => {
            if(err) {
                callback(err, null)
            } else {
                callback(null, JSON.parse(data))
            }
        } )
    }
}

module.exports = SubjectModel