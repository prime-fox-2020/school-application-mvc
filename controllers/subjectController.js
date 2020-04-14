const SubjectModel = require('../models/subjectModel');

class SubjectController {
    static showData(req, res) {
        SubjectModel.showData(req, (err, data) => {
            if (err) res.render('error', { err: err});
            res.render('subject', {data, alert:req.query});
        });
    }

    static addGet(req, res) {
        res.render('addSubject');
    }

    static addPost(req, res) {
        SubjectModel.addPost(req.body, (err, data) => {
            if (err) res.render('error', {err});
            res.redirect(`/subject?message=${data}&type=success`);
        });
    }

    static editGet(req, res) {
        SubjectModel.editGet(+req.params.id, (err, data) => {
            if (err) res.render('error', {err});
            res.render('editSubject', {data});
        });
    }

    static editPost(req, res) {
        SubjectModel.editPost(+req.params.id, req.body, (err, data) => {
            if (err) res.render('error', {err});
            res.redirect(`/subject?message=${data}&type=success`);
        });
    }

    static delete(req, res) {
        SubjectModel.delete(+req.params.id, (err, data) => {
            if (err) res.render('error', {err});
            res.redirect(`/Subject?message=${data}&type=success`);
        });
    }

    static notFound(req, res) {
        res.render('error', { err: '404 - Page Not Found'});
    }
}

module.exports = SubjectController;