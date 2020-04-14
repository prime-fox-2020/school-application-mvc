const fs = require('fs')


class Model{
  static read(callback){
    fs.readFile('./teachers.json', 'utf8', (err,data)=>{
      if(err){
        callback(err, null)
      }else{
        callback(null,JSON.parse(data))
        // console.log(data)
      }
    })
  }

  static getTeachers(callback){
  this.read((err,data)=>{
    if(err){
      callback(err,null)
    }else{
       callback(null, data)
     
    }
  })
  }

  static getTeacherId(teacherId, callback){
    this.read((err,data)=>{
      if(err){
      callback(err,null)
      }else{
        let teacherList = []
        data.forEach(item =>{
          if(item.id == teacherId){
            teacherList.push(item)
          }
        })
         callback(null, teacherList)
      }
    })
  }
}

// Model.getTeacherId()
module.exports = Model