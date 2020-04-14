const StudentModel = require('../model/studentsModel');

class StudentController {
	static studentListGet(req, res) {
		StudentModel.getStudentList((err, data) => {
			if (err) {
				res.render(err);
			} else {
				res.render('students', { data });
			}
		});
	}
	static addStudentGet(req, res) {
		res.render('studentsAdd');
	}
	static addStudentPost(req, res) {
		// res.send(req.body)
		StudentModel.addStudentPost(req.body, (err, data) => {
			if (err) {
				res.render(err);
			} else {
				res.redirect('/students');
				// res.render('studentpage',{data})
			}
		});
	}

	static editStudentGet(req, res) {
		StudentModel.editStudentGet(Number(req.params.id), (err, data) => {
			if (err) {
				res.render(err);
			} else {
				res.render('studentsEdit', { data });
			}
		});
	}
	static editStudentPost(req, res) {
		const id = Number(req.params.id);

		const updatedStudent = {
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			email: req.body.email
		};
		StudentModel.editStudentPost(id, req.body, (err, data) => {
			if (err) {
				console.log('--------------------------');
				res.render(err);
			} else {
        console.log('aaaaaaaaaaaaaaaaaaaaaaa');
				res.redirect('/students');
			}
		});
	}

	static deleteStudentGet(req, res) {
		StudentModel.deleteStudentGet(Number(req.params.id), (err, data) => {
			if (err) {
				res.render(err);
			} else {
				res.redirect('/students');
			}
		});
	}

	static emailStudentGet(req, res) {
		StudentModel.emailStudentGet(req.params.email, (err, data) => {
			if (err) {
				res.render(err);
			} else {
				res.render('students', { data });
			}
		});
	}
}

module.exports = StudentController;
