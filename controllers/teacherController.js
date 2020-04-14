const TeacherModel = require('../models/teacherModel');

class TeacherController {
    static showData(req, res) {
        TeacherModel.showData(req, (err, data) => {
            if (err) res.render('error', { err: err});
            res.render('teacher', {data, alert:req.query});
        });
    }

    static addGet(req, res) {
        res.render('addTeacher');
    }

    static addPost(req, res) {
        TeacherModel.addPost(req.body, (err, data) => {
            if (err) res.render('error', {err});
            res.redirect(`/teacher?message=${data}&type=success`);
        });
    }

    static editGet(req, res) {
        TeacherModel.editGet(+req.params.id, (err, data) => {
            if (err) res.render('error', {err});
            res.render('editTeacher', {data});
        });
    }

    static editPost(req, res) {
        TeacherModel.editPost(+req.params.id, req.body, (err, data) => {
            if (err) res.render('error', {err});
            res.redirect(`/teacher?message=${data}&type=success`);
        });
    }

    static delete(req, res) {
        TeacherModel.delete(+req.params.id, (err, data) => {
            if (err) res.render('error', {err});
            res.redirect(`/teacher?message=${data}&type=success`);
        });
    }

    static notFound(req, res) {
        res.render('error', { err: '404 - Page Not Found'});
    }
}

module.exports = TeacherController;