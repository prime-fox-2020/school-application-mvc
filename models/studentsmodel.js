const fs = require('fs')

class StudentsModel {
  static open(callback) {
    fs.readFile('./db/students.json', 'utf8', (err, data) => {
        if (err) {throw err}
        else {callback(null, JSON.parse(data))}
    })
  }

  static save (data, callback) {
    fs.writeFile('./db/students.json', JSON.stringify(data, null, 2), 'utf8', (err) => {
      if (err) {throw err}
      else {callback(null)}
    })
  }

  static showStudents(callback) {
    this.open ((err, data) => {
      if (err) {callback(err, null)}
      else {callback(null, data)}
    })
  }

  static add(req, callback) {
    const first_name = req.body.first_name
    const last_name = req.body.last_name
    const email = req.body.email
    const gender = req.body.gender
    this.open((err, data) => {
      if (err) {throw err}
      else {
        const id = data[data.length-1].id + 1
        data.push({id, first_name, last_name, email, gender})
        
        this.save(data, (err) => {
          if (err) {throw err}
          else (callback(null))
        })
        
      }
    })
  }

  static getEdit (id, callback) {
    const ids = Number(id)
    this.open((err, data) => {
      if (err) {throw err}
      else {
        for (let i = 0; i < data.length; i++){
          if (data[i].id === ids){
            const obj = data[i]
            console.log(obj)
            callback(obj)
          }
        }  
      }
    })
  }

  static edit (req, callback) {
    const ids = Number(req.params.id)
    const first_name = req.body.first_name
    const last_name = req.body.last_name
    const email = req.body.email
    const gender = req.body.gender
    this.open((err, data) => {
      if (err) {throw err}
      else {
        for (let i = 0; i < data.length; i++){
          if (data[i].id === ids){
            data[i].first_name = first_name
            data[i].last_name = last_name
            data[i].email = email
            data[i].gender = gender

            this.save(data, (err) => {
              if (err) {throw err}
              else {callback(null)}
            })
          }
        }
      }
    })
  }

  static delete (req, callback) {
    const ids = Number(req.params.id)
    this.open((err, data) => {
      if (err) {throw err}
      else {
        const newData = []
        for (let i = 0; i < data.length; i++){
          if (data[i].id !== ids){
            newData.push(data[i])
          }
        }
        this.save(newData, (err) => {
          if (err) {throw err}
          else {callback(null)}
        })
      }
    })
  }
}

module.exports = StudentsModel