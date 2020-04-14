'use strict'

const modelStudents = require('../models/students')

class StudentController{
  static getStudents(req, res){
    modelStudents.getStudents((err, data) => {
      if(err) res.send('404 not Found')
      res.render('students', {students : data});
    })
  }

  static addGet(req, res){
    res.render('students/add')
  }

  static addPost(req, res){
    modelStudents.addPost(req.body, (err, data) => {
      if(err) res.send(`404 not Found ${err}`)
      else res.redirect('/students')
    })
  }

  static editGet(req, res){
    modelStudents.editGet(req.params.id, (err, data)=>{
      if(err) res.send('404 not Found')
      else res.render('students/edit', {student : data})
    })
  }

  static editPost(req, res){
    const id = Number(req.params.id)
    modelStudents.editPost(id, req.body, (err, data) => {
      if(err) res.send(`404 not Found ${err}`)
      else res.redirect('/students')
    })
  }

  static deleteGet(req, res){
    modelStudents.delete(Number(req.params.id), (err, data) =>{
      if(err) res.send('404 not Found')
      else res.redirect('/students')
    })
  }

  static getByEmail(req, res){
    modelStudents.getByEmail(req.params.email, (err,data) => {
      if(err) res.send(`404 not Found ${err}`)
      else res.render('students', {students: [data]})
    })
  }
}

module.exports = StudentController