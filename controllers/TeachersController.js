const TeachersModel = require('../models/TeacherModel');

class TeachersController {
    static showList(req, res) {
        TeachersModel.getList(req, (err, teacherList) => {
            if (err) res.render('error', {msg: err});
            else res.render('teachers', {teacherList})
        });
    }
}

module.exports = TeachersController;