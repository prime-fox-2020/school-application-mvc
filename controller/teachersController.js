const TM = require('../model/teachersModel');

class TeacherController {

  static teacherList(req, res) {
    //baca dari model -> render
    TM.getTeacher((err, data) => {
      if(err) res.render('error', {error: err})
      else res.render('./teachers', {data, alert: req.query});
    })
  }

  static teacherListId(req, res) {
    //baca dari model -> render
    TM.getTeacherId(req.params.id, (err, data) => {
      if(err) res.render('error', {error: err})
      else res.render('./teachers', {data, alert: req.query});
    })
  }

}

module.exports = TeacherController;
