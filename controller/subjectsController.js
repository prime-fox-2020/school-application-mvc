const SM = require('../model/subjectsModel');

class SubjectController {

  static subjectList(req, res) {
    //baca dari model -> render
    SM.getSubject((err, data) => {
      if(err) res.render('error', {error: err})
      else res.render('./subjects', {data, alert: req.query});
    })
  }

  static subjectListId(req, res) {
    //baca dari model -> render
    SM.getSubjectId(req.params.id, (err, data) => {
      if(err) res.render('error', {error: err})
      else res.render('./subjects', {data, alert: req.query});
    })
  }


}

module.exports = SubjectController;
