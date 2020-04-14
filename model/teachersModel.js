const fs = require('fs')

class TeachersModel {

  static read(callback) {
    fs.readFile('./data/teachers.json', 'utf8', (err, data) => {
      if(err) {
        callback(err, null)
      } else {
        data = JSON.parse(data)
        callback(null, data)
      }
    })
  }

  static getTeachers(callback) {
    this.read((err, data) => {
      if(err) {
        callback(err, null)
      } else {
        callback(null, data)
      }
    })
  }

  static getId(params, callback) {
    this.read((err, data) => {
      if(err) {
        callback(err, null)
      } else {
        let teacher = []
        data.forEach(element => {
          if(element.id == params) {
            teacher.push(element)
          }
        });
        callback(null, teacher)
      }
    })
  }

}

module.exports = TeachersModel