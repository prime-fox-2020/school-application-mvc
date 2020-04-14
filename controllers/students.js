const StudentsModel = require('../models/students')

class StudentsController {

    static getAll(req, res) {
        StudentsModel.getAll((err, data) => {
            if (err) {
                res.send(err)
            } else {
                res.render('students', { students: data })
            }
        })
    }

    static showForm(req, res) {
        res.render('addStudent')
    }

    static addProcess(req, res) {
        StudentsModel.addProcess(req.body, (err, data) => {
            if (err) {
                res.send(err)
            } else {
                res.redirect('/students')
            }
        })
    }

    static deleteProcess(req, res) {
        StudentsModel.deleteProcess(req.params.id, (err) => {
            if (err) {
                res.send(err)
            } else {
                res.redirect('/students')
            }
        })
    }

    static showEditForm(req, res) {
        StudentsModel.getOne(req.params.id, (err, data) => {
            if (err) {
                res.send(err)
            } else {
                res.render('editStudent', { students: data })
            }
        })
    }

    static editProcess(req, res) {
        StudentsModel.editProcess(Number(req.params.id), req.body, (err) => {
            if (err) {
                res.send(err)
            } else {
                res.redirect('/students')
            }
        })
    }

    static getByEmail(req, res){
        StudentsModel.getByEmail(req.params.email, (err, data) => {
            if (err) {
                res.send(err)
            } else {
                res.render('students', {students: data})
            }
        })
    }
}

module.exports = StudentsController