const StudentModel = require("../models/studentsModel")

class ControllerStudents {
    static get(req, res) {
        StudentModel.getStudents((err, data) => {
            if (err) {
                res.send(err)
            } else {
                res.render("students", { students: data})
            }
        })
    }

    static create(req, res) {
        res.render('addStudent')
    }

    static add(req, res) {
        StudentModel.add(req.body, (err, data) => {
            if (err) {
                res.send(err)
            } else {
                res.redirect("/students")
            }
        })
    }

    static destroy(req, res) {
        StudentModel.delete(req.params.id, (err) => {
            if (err) {
                res.send(err)
            } else {
                res.redirect('/students')
            }
        })
    }

    static formEdit(req, res) {
        StudentModel.getEdit(req.params.id, (err, data) => {
            if (err) {
                res.send(err)
            } else {
                res.render('editStudent', {students: data})
            }
        })
    }

    static update(req, res) {
        StudentModel.update(Number(req.body.studentId), req.body, (err) => {
            if (err) {
                res.send(err)
            } else {
                res.redirect('/students')
            }
        })
    }

    static getEmail(req, res){
        StudentModel.getEmail(req.params.email, (err, data) => {
            if (err) {
                res.send(err)
            } else {
                res.render('students', {students: data})
            }
        })
    }
}

module.exports = ControllerStudents