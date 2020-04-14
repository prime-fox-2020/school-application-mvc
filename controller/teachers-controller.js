const TeachersModel = require('../model/teachers-model.js')

class TeachersController {
    static getListTeachers(req, res) {
        TeachersModel.getListTeachers((err, data) => {
            if (err) {
                res.send(err)
            } else {
                res.render('teachers-view.ejs', {data})
            }
        })
    }

    static getAdd(req, res) {
        res.render('add-teachers.ejs')
    }
    
    static postAdd(req, res) {
        TeachersModel.postAdd(req.body, (err, data) => {
            if (err) {
                res.send(err)
            } else {
                res.redirect('/teachers')
            }
        })
    }

    static getEdit(req, res) {
        TeachersModel.getEdit((err, data) => {
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
                res.render('edit-teachers.ejs', {id, dataById})
            }
        })
    }

    static postEdit(req, res) {
        TeachersModel.postEdit(req.body, req.params.id, (err, data) => {
            if (err) {
                res.send(err)
            } else {
                res.redirect('/teachers')
            }
        })
    }

    static getDelete(req, res) {
        TeachersModel.getDelete(req.params.id, (err, data) => {
            if (err) {
                res.send(err)
            } else {
                res.redirect('/teachers')
            }
        })
    }
}

module.exports = TeachersController