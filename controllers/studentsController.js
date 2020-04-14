const StudentsModel = require('../models/studentsModel');

class StudentsController {
  static getData(req, res) {
    StudentsModel.getData((err, data) => {
      if (err) {
        res.render('error');
      } else {
        res.render('students', {data, error: false});
      }
    })
  }

  static getDataByEmail(req, res) {
    StudentsModel.getData((err, data) => {
      if (err) {
        res.render('error')
      } else {
        data = data.filter(dat => dat.email == req.params.email);
        let error = false;
        if (!data.length) error = true;
        res.render('students', {data, error})
      }
    })
  }

  static addDataGet(req, res) {
    StudentsModel.addDataGet((err, data) => {
      if (err) {
        res.render('error');
      } else {
        res.render('students_add', {err_msg: null});
      }
    })
  }

  static addDataPost(req, res) {
    StudentsModel.addDataPost(req, err => {
      if (err) {
        res.render('error');
      } else {
        res.redirect('/students');
      }
    })
  }

  static editDataGet(req, res) {
    StudentsModel.editDataGet((err, data) => {
      if (err) {
        res.render('error');
      } else {
        const id = req.params.id;
        data.forEach(dat => {
          if (dat.id == id) {
            res.render('students_edit.ejs', {err_msg: null, edit: dat, id});
          }
        })
      }
    })
  }

  static editDataPost(req, res) {
    StudentsModel.editDataPost(req, (err, data) => {
      if (err) {
        res.render('error');
      } else {
        res.redirect('/students');
      }
    })
  }

  static deleteData(req, res) {
    StudentsModel.deleteData(req, (err, data) => {
      if (err) {
        res.render('error');
      } else {
        res.redirect('/students');
      }
    })
  }

  static searchByEmail(req, res) {
    res.redirect(`/students/${req.body.search}`);
  }
}

module.exports = StudentsController;