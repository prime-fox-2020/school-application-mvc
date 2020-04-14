const TeachersModel = require("../models/teachersModel");

class TeachersController {
  static teachersList(req, res) {
    //baca data dari model => render view students
    TeachersModel.getTeachers((err, data) => {
      if (err) {
        res.render("error", { error: err });
      } else {
        res.render("teachers", { data });
      }
    });
  }
}

module.exports = TeachersController