const teachersModel = require('../models/teachersModel')

class TeacherController {
    static getTeacherData(req, res) {
        teachersModel.getTeachersData((err, data) => {
            if(err) {
                res.render('error', {error: err})
            } else {
                res.render('teachers', {data})
            }
        })
    }
}

module.exports = TeacherController