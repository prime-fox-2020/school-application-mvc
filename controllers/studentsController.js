const StudentModel = require('../models/studentModel')


class StudentController {
    static showDataStudents(req, res) {
        // baca data dari model >> render ke views
        StudentModel.getStudents((err, data) => {
            if (err) {
                res.render('error', { error: err })
            } else {
                // res.render('students')
                // console.log(data);
                res.render('students', { data })
            }
        })
    }

    static addGet(req, res) {
        res.render('add')
    }

    static addPost(req, res) {
        
    }
}

module.exports = StudentController