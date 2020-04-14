const SubjectsModel = require('../model/subjects-model.js')

class SubjectsController {
    static getListSubjects(req, res) {
        SubjectsModel.getListSubjects((err, data) => {
            if (err) {
                res.send(err)
            } else {
                res.render('subjects-view.ejs', {data})
            }
        })
    }

    static getAdd(req, res) {
        res.render('add-subjects.ejs')
    }
    
    static postAdd(req, res) {
        SubjectsModel.postAdd(req.body, (err, data) => {
            if (err) {
                res.send(err)
            } else {
                res.redirect('/subjects')
            }
        })
    }

    static getEdit(req, res) {
        SubjectsModel.getEdit((err, data) => {
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
                res.render('edit-subjects.ejs', {id, dataById})
            }
        })
    }

    static postEdit(req, res) {
        SubjectsModel.postEdit(req.body, req.params.id, (err, data) => {
            if (err) {
                res.send(err)
            } else {
                res.redirect('/subjects')
            }
        })
    }

    static getDelete(req, res) {
        SubjectsModel.getDelete(req.params.id, (err, data) => {
            if (err) {
                res.send(err)
            } else {
                res.redirect('/subjects')
            }
        })
    }
}

module.exports = SubjectsController