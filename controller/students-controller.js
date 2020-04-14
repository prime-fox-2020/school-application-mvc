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
        StudentsModel.getEdit((err, data) => {
            if (err) {
                res.send(err)
            } else {
                let id = Number(req.params.id)
                let dataById = null
                for (let i in data) {
                    if (data[i].id === id) {
                        dataById = data[i]
                    }
                }
                res.render('edit-students.ejs', {id, dataById})
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
}

module.exports = StudentsController