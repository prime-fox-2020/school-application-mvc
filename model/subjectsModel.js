const fs = require('fs')

class SubjectsModel{

  static read(callback) {
    fs.readFile('./data/subjects.json','utf8', (err, data) => {
      if(err) {
        callback(err, null)
      } else {
        data = JSON.parse(data)
        callback(null, data)
      }
    })
  }

  static getSubjects(callback) {
    this.read((err, data) => {
      if(err) {
        callback(err, null)
      } else {
        callback(null, data)
      }
    })
  }

  static getId(params, callback) {
    // console.log(params)
    this.read((err, data) => {
      if(err) {
        callback(err, null)
      } else {
        let subject = []
        data.forEach(element => {
          if(element.id == params) {
            subject.push(element)
          }
        });
        callback(null, subject)
      }
    })
  }

}

module.exports = SubjectsModel