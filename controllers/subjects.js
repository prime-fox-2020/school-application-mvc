const SubjectsModel = require('../models/subjects')

class SubjectsController {

    static getAll(req, res) {
        SubjectsModel.getAll((err, data) => {
            if (err) {
                res.send(err)
            } else {
                res.render('subjects', { subjects: data })
            }
        })
    }

    static getByID(req, res) {
        SubjectsModel.getByID(req.params.id, (err, data) => {
            if (err) {
                res.send(err)
            } else {
                res.render('subjects', { subjects : data })
            }
        })
    }

}

module.exports = SubjectsController