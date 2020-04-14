const StudentsModel = require('../model/students-model')

class StudentsController {
    static getListStudents(req, res) {
        StudentsModel.getListStudents((err, data) => {
            if (err) {
                res.send(err)
            } else {
                res.render('students-view.ejs', {data})
            }
        })
    }

    static getAdd(req, res) {
        res.render('add-students.ejs')
    }
    
    static postAdd(req, res) {
        StudentsModel.postAdd(req.body, (err, data) => {
            if (err) {
                res.send(err)
            } else {
                res.redirect('/students')
            }
        })
    }

    static getEdit(req, res) {
        StudentsModel.getEdit(req.params.id, (err, data) => {
            if (err) {
                res.send(err)
            } else {
                let id = Number(req.params.id)
                // let dataById = data
                res.render('edit-students.ejs', {id, data})
            }
        })
    }

    static postEdit(req, res) {        
        StudentsModel.postEdit(req.body, req.params.id, (err, data) => {
            if (err) {
                res.send(err)
            } else {
                res.redirect('/students')
            }
        })
    }

    static getDelete(req, res) {
        StudentsModel.getDelete(req.params.id, (err, data) => {
            if (err) {
                res.send(err)
            } else {
                res.redirect('/students')
            }
        })
    }

    static postStudentByEmail(req, res) {        
        StudentsModel.postStudentByEmail(req.body.email, (err, data) => {
            if (err) {
                res.send(err)
            } else {
                let email = req.body.email
                res.render('students-by-email.ejs', {email, data})
            }
        })
    }
}

module.exports = StudentsController