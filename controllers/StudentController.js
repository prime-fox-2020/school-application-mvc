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
      } else {
        res.redirect('/students')
      }
    })
  }
}

module.exports = StudentController