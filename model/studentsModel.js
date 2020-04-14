const fs = require('fs')

class StudentsModel {

  static read(callback) {
    fs.readFile('./data/students.json','utf8', (err, data) => {
      if(err) {
        callback(err, null)
      } else {
        data = JSON.parse(data)
        callback(null, data)
      }
    })
  }

  static getStudents(callback) {
    this.read((err, data) => {
      if(err) {
        callback(err,null)
      } else {
        callback(null,data)
      }
    })
  }

  static postAdd(student, callback) {
    this.read((err, data) => {
      if(err) {
        callback(err, null)
      } else {
        data.push({
          id: data[data.length-1].id +1,
          first_name: student.first_name,
          last_name: student.last_name,
          email: student.email,
          gender: student.gender,
          birth_date: student.birth_date
        })
        this.save(data, (err) => {
          if(err) {
            callback(err, null)
          } else {
            callback(null, `Students ${student.first_name} successfully added`)
          }
        })
      }
    })
  }

  static save(data, callback) {
    fs.writeFile('./data/students.json', JSON.stringify(data,null,2), 'utf8', (err) => {
      if(err) {
        callback(err)
      } else {
        callback(null)
      }
    })
  }

  static getEdit(paramsId, callback) {
    this.read((err, data) => {
      if(err) {
        callback(err, null)
      } else {
        let edited = {}
        data.forEach(element => {
          if(paramsId === element.id) {
            edited = element
          }
        });
        callback(null, edited)
      }
    })
  }

  static postEdit(params, callback) {
    this.read((err, data) => {
      if(err) {
        callback(err, null)
      } else {
        data.forEach(element => {
          if(element.id === params.id) {
            element.first_name = params.first_name
            element.last_name = params.last_name
            element.email = params.email
            element.gender = params.gender
            element.birth_date = params.birth_date
          }
        });
        this.save(data, (err) => {
          if(err) {
            callback(err,null)
          } else {
            callback(null, `Successfully edited Student ${params.first_name}`)
          }
        })
      }
    })
  }

  static getEmail(params, callback) {
    this.read((err, data) => {
      if(err) {
        callback(err, null)
      } else {
        let sort = []
        data.forEach(element => {
          if(element.email == params) {
            sort.push(element)
          }
        });
        callback(null, sort)
      }
    })
  }

  static delete(studentId, callback) {
    this.read((err, data) => {
      if(err) {
        callback(err, null)
      } else {
        let newData = []
        data.forEach(element => {
          if(element.id !== studentId) {
            newData.push(element)
          }
        });
        this.save(newData, (err) => {
          if(err) {
            callback(err,null)
          } else {
            callback(null, `Students id ${studentId} has been deleted`)
          }
        })
      }
    })
  }

}

module.exports = StudentsModel