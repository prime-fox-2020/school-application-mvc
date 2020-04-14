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
            id: Number(req.params.id),
            first_name: req.params.fname,
            last_name: req.params.lname,
            email: req.params.email,
            gender: req.params.gender,
            birth_date: req.params.birthdate
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
            id: Number(req.params.id),
            first_name: req.params.fname,
            last_name: req.params.lname,
            email: req.params.email,
            gender: req.params.gender,
            birth_date: req.params.birthdate
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