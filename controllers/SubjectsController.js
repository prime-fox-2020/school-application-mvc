const SubjectModel = require('../models/SubjectModel');

class SubjectsController {
    static showList(req, res) {
        SubjectModel.getList(req, (err, subjectList) => {
            if (err) res.render('error', {msg: err});
            else res.render('subjects', {subjectList})
        });
    }
}

module.exports = SubjectsController;