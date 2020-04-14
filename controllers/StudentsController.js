const ModelStudents = require('../models/ModelStudents')

class StudentsController{
    static getPage(req, res){
        ModelStudents.getStudents( (err, data) => {
            if(err){
                res.render('error', {error: err})
            }
            else{
                res.render('students', {data, alert : req.query})
            }
        })
    }
    static addPage(req, res){
        res.render('add-student')
    }
    static postAddPage(req, res){
        ModelStudents.write(req.body, (err, data) => {
            if(err){
                res.render('error', {error: err})
            }
            else{
                res.redirect(`/students?message=${data}&type=success`)
            }
        })
    }

    static delete(req, res) {
        ModelStudents.delete(Number(req.params.id), (err, data) => {
            if(err){
                res.render('error', {error : err})
            }
            else{
                res.redirect(`/students?message=${data}&type=success`)
            }
        })
    }
    static editPage(req, res){
        ModelStudents.readWithId(Number(req.params.id), (err, data) => {
            if(err){
                res.render('error', {error : err})
            }
            else{
                res.render('edit-student', {data})
            }
        })
    }

    static postEditPage(req, res){
        ModelStudents.update(req.body, (err, data) => {
            if(err){
                res.render('error', {error: err})
            }
            else{
                res.redirect(`/students?message=${data}&type=success`)
            }
        })
    }

    static pageWithEmail(req, res){
        ModelStudents.getPageEmail (req.params.email, (err, data) => {
            if(err){
                res.render('error', {error: err})
            }
            else{
                res.render('students', {data, alert : ''})
            }
        })
    }
}

module.exports = StudentsController

module.exports = StudentsController;