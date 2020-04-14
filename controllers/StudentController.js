const StudentModel = require('../models/StudentModel')

class StudentController {

  static findAll(req, res) {
    StudentModel.findAll((err, data) => {
      if (err) {
        res.render('public/404', {errMsg: 'Cannot connect database'})
      } else {
        res.render('student/showAll', {data})
      }
    })
  }

  static createOne(req, res) {
    res.render('404', { errMsg: '404 - Page not found!' })
  }
}

module.exports = StudentController