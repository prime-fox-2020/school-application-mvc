const fs = require('fs')

class StudentsModel {

  static getStudents(callback){
    this.open((err, data)=>{
      if (err) {
        callback (err, null)
      } else {
        callback (null, data)
      }
    })
  }

  static open(callback){
    fs.readFile('./data/students.json', 'utf8', (err, data)=>{
      if (err) {
        callback (err, null)
      } else {
        callback (null, JSON.parse(data))
      }
    })
  }
  
  static save(data, callback){
    fs.writeFile('./data/students.json', JSON.stringify(data, null, 2), 'utf8', (err)=>{
      if (err) {
        callback(err)
      } else {
        callback(null)
      }
    })
  }

  static addPost(students, callback){
    this.open((err, data)=>{
      if (err) callback(err, null)
      else {
        data.push({
          id: data[data.length-1].id +1,
          first_name: students.first_name,
          last_name: students.last_name,
          email: students.email,
          gender: students.gender,
          birth_date: students.birth_date
        })
        this.save(data, (err)=>{
          if (err) {
            callback(err, null)
          } else {
            callback(null, `Students has been add to students list!`)
          }
        })
      }
    })
  }

  static delete(studentsId, callback){
    
    this.open((err, data)=>{
      if (err) callback(err, null)
      else {
        let temp = []
        
        data.forEach(list =>{
          if (studentsId !== list.id){
            temp.push(list)
          }
        })
        this.save(temp, (err)=>{
          if (err) {
            callback(err, null)
          } else {
            callback(null, `Students with id: ${studentsId} has been deleted from students list!`)
          }
        })
      }
    })
  }

  static editGet(studentsId, callback){
    this.open((err, data)=>{
      if (err) callback(err, null)
      else {
        let temp = {}

        data.forEach(list =>{
          if(studentsId === list.id){
            temp = list
          }
        })
        callback(null, temp)
      }
    })
  }


  static editPost(students, callback){
    this.open((err, data)=>{
      if (err) callback(err, null)
      else {
        data.forEach(list =>{
          if(list.id === students.id){
              list.first_name = students.first_name,
              list.last_name = students.last_name,
              list.email = students.email,
              list.gender = students.gender,
              list.birth_date = students.birth_date
          }
        })
        this.save(data, (err)=>{
          if (err) {
            callback(err, null)
          } else {
            callback(null, `Students with id: ${students.id} has been Edited!`)
          }
        })
      }
    })
  }

  static getEmail(email, callback){
    this.open((err, data)=>{
      if (err) {
        callback (err, null)
      } else {
        const temp = data.filter( (list) => list.email == email)
        callback(null, temp)
      }
    })
  }
}

module.exports = StudentsModel