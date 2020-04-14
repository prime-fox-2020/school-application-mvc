const STM = require('../model/studentsModel');

class StudentController {

  static studentList(req, res) {
    //baca dari model -> render
    STM.getStudent((err, data) => {
      if(err) res.render('error', {error: err})
      else res.render('./students', {data, alert: req.query});
    })
  }

  static studentEmail(req, res) {
    //baca dari model -> render
    STM.getStudentEmail(req.params.email, (err, data) => {
      if(err) res.render('error', {error: err})
      else res.render('./students', {data, alert: req.query});
    })
  }

  static studentAddGet () {
    res.render('./add');
  }

  static studentAddPost(req, res) {
    STM.addStudent((err, data) => {
    if(err) res.render('error', {error: err})
    else res.render('./students', {data, alert: req.query})
  })
}
//
//   static studentEditGet(req, res) {
//     STM.getStudentAdd((err, data) => {
//     if(err) res.render('error', {error: err})
//     else res.render('./students', {data, alert: req.query})
//   })
// }
//
//   static studentEditPost(req, res) {
//     STM.getStudentAdd((err, data) => {
//     if(err) res.render('error', {error: err})
//     else res.render('./students', {data, alert: req.query})
//   })
// }

  static deleteStudentById(req, res) {
    STM.deleteStudent(req.params.id, (err, data) => {
    if(err) res.render('error', {error: err})
    else res.redirect('./students');
  })
}


}

module.exports = StudentController;
