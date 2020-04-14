const StudentModel = require('../models/studentModel');

class StudentController {
    static showData(req, res) {
        StudentModel.showData(req, (err, data) => {
            if (err) res.render('error', { err: err});
            res.render('student', {data, alert:req.query});
        });
    }

    static addGet(req, res) {
        res.render('addStudent');
    }

    static addPost(req, res) {
        StudentModel.addPost(req.body, (err, data) => {
            if (err) res.render('error', {err});
            res.redirect(`/student?message=${data}&type=success`);
        });
    }

    static editGet(req, res) {
        StudentModel.editGet(+req.params.id, (err, data) => {
            if (err) res.render('error', {err});
            res.render('editStudent', {data});
        });
    }

    static editPost(req, res) {
        StudentModel.editPost(+req.params.id, req.body, (err, data) => {
            if (err) res.render('error', {err});
            res.redirect(`/student?message=${data}&type=success`);
        });
    }

    static delete(req, res) {
        StudentModel.delete(+req.params.id, (err, data) => {
            if (err) res.render('error', {err});
            res.redirect(`/student?message=${data}&type=success`);
        });
    }

    static notFound(req, res) {
        res.render('error', { err: '404 - Page Not Found'});
    }
}

module.exports = StudentController;