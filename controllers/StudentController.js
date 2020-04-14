const StudentModel = require('../models/StudentModel')

class StudentController {

  static getStudents(req, res) {
    StudentModel.findAll((err, data) => {
      if (err) {
        res.render('public/404', {errMsg: err})
      } else {
        res.render('student', {data})
      }
    })
  }

  static getAdd(req, res) {
    res.render('student/add')
  }

  static postAdd(req, res) {
    StudentModel.createOne(req.body, (err, data) => {
      if (err) {
        res.render('public/404', { errMsg: err })
      } else if (data === 'success') {
        res.redirect('/students')
      } else {
        res.render('public/404', { errMsg: data })
      }
    })
  }

  static getEdit(req, res) {
    StudentModel.getEdit(Number(req.params.id), (err, data) => {
      if (err) {
        res.render('public/404', { errMsg: err })
      } else if (typeof data === 'object') {
        console.log(data)
        res.render('student/edit', {data})
      } else {
        res.render('public/404', { errMsg: data })
      }
    })
  }

  static postEdit(req, res) {
    StudentModel.postEdit(Number(req.params.id), req.body, (err, data) => {
      if (err) {
        res.render('public/404', { errMsg: err })
      } else if (data === 'success') {
        res.redirect('/students')
      } else {
        res.render('public/404', { errMsg: data })
      }
    })
  }
}

module.exports = StudentController