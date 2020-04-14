const StudentModel = require('../models/studentModel');

class StudentController{
    static read(req, res){
        StudentModel.read((err, data) => {
            if(err){
                res.send(err);
            } else {
                res.render('student', {data});
            }
        })
    }

    static add_get(req, res){
        StudentModel.add_get((err, data) => {
            if(err){
                res.send(err)
            } else {
                res.render('student_add')
            }
        })
    }

    static add_post(req, res){
        StudentModel.add_post(req, (err, data) => {
            if(err){
                res.send(err);
            } else {
                res.redirect('/students');
            }
        })
    }

    static getEmail(req, res){
        StudentModel.getEmail(req.params.email, (err, data) => {
            if(err){
                res.send(err);
            } else {
                res.send(data);
            }
        })
    }

    static edit_get(req, res){
        StudentModel.edit_get(req.params.id, (err, data) => {
            if(err){
                res.send(err);
            } else {
                res.render('student_edit', {el: data.el, id: req.params.id, birth_date: data.birth_date});
            }
        })
    }

    static edit_post(req, res){
        StudentModel.edit_post(req.params.id ,req.body, (err, data) => {
            if(err){
                res.send(err);
            } else {
                res.redirect('/students');
            }
        })
    }

    static delete(req, res){
        StudentModel.delete(req.params.id, (err, data) => {
            if(err){
                res.send(err);
            } else {
                res.redirect('/students');
            }
        })
    }
}

module.exports = StudentController;