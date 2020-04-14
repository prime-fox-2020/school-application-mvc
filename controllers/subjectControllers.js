const subjectModel = require('../models/subjectsModel')


class SubjectController {
    static SubjectData(req, res) {
        subjectModel.getData((err, data) => {
            if(err) {
                res.render('error', {error: err})
            } else {
                res.render('subjects', {data})
            }
        })
    }
}

module.exports = SubjectController