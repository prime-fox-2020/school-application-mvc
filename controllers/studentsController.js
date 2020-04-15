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
                res.render('students', { data, alert: req.query })
            }
        })
    }

    static addGet(req, res) {
        res.render('add')
    }

    static addPost(req, res) {
        const addStudent = {

            first_name: req.body.fname,
            last_name: req.body.lname,
            email: req.body.email,
            gender: req.body.gender,
            birth_date: req.body.birthdate
        }

        StudentModel.addPost(addStudent, (err, data) => {
            if (err) {
                res.render('error', { error: err })
            } else {
                res.redirect(`/students?message=${data}&type=succes`)
            }
        })
    }

    static delete(req, res) {
        StudentModel.delete(Number(req.params.id), (err, data) => {
            if (err) {
                res.render('error', { error: err })
            } else {
                res.redirect(`/students?message=${data}&type=succes`)
            }
        })
    }

    static editGet(req, res) {
        StudentModel.editGet(Number(req.params.id), (err, data) => {
            if (err) {
                res.render('error', { error: err })
            } else {
                res.render('edit', { data })
            }
        })
    }

    static editPost(req, res) {
        const updateStudent = {

            first_name: req.body.fname,
            last_name: req.body.lname,
            email: req.body.email,
            gender: req.body.gender,
            birth_date: req.body.birthdate
        }

        StudentModel.editPost(updateStudent, (err, data) => {
            if (err) {
                res.render('error', { error: err })
            } else {
                res.redirect(`/students?message=${data}&type=succes`)
            }
        })
    }
}

module.exports = StudentController