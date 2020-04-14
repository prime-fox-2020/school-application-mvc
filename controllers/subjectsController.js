const SubjectsModel = require('../models/subjectsModel');

class SubjectsController {
  static getData(req, res) {
    SubjectsModel.getData((err, data) => {
      if (err) {
        res.render('error');
      } else {
        res.render('subjects', {data});
      }
    })
  }

  static getDataById(req, res) {
    SubjectsModel.getData((err, data) => {
      if (err) {
        res.render('error')
      } else {
        data = data.filter(dat => dat.id == req.params.id);
        res.render('subjects', {data});
      }
    })
  }
}

module.exports = SubjectsController;