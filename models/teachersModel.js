const fs = require('fs')

class TeachersModel {

  static getTeachers(callback){
    this.open((err, data)=>{
      if (err) callback (err, null)
      else callback (null, data)
    })
  }

  static open(callback){
    fs.readFile('./data/teachers.json', 'utf8', (err, data)=>{
      if (err) callback (err, null)
      else callback (null, JSON.parse(data))
    })
  }

  static getId(id, callback){
    this.open((err, data)=>{
      if (err) {
        callback (err, null)
      } else {
        const temp = data.filter( (list) => list.id == id)
        callback(null, temp)
      }
    })
  }
}

module.exports = TeachersModel