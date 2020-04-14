const fs = require('fs')


class Model{
  static read(callback){
    fs.readFile('./subjects.json', 'utf8', (err,data)=>{
      if(err){
        callback(err, null)
      }else{
        callback(null,JSON.parse(data))
        // console.log(data)
      }
    })
  }

  static getSubjects(callback){
  this.read((err,data)=>{
    if(err){
      callback(err,null)
    }else{
       callback(null, data)
     
    }
  })
  }

  static getSubjectsId(subjectsId, callback){
    this.read((err,data)=>{
      if(err){
      callback(err,null)
      }else{
        let subjectsList = []
        data.forEach(item =>{
          if(item.id == subjectsId){
            subjectsList.push(item)
          }
        })
         callback(null, subjectsList)
      }
    })
  }
}

// Model.getTeacherId()
module.exports = Model