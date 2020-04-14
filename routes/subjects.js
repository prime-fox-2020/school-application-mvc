const router = require('express').Router();

const subjects = require('../subjects.json');

// const teachers = require('../teachers.json');
const SubjectsController = require('../controller/subjectsController');

router.get('/', SubjectsController.showSubjects);
router.get('/:id', SubjectsController.getSubjectsId);

// router.get('/', (req, res) => {
// 	res.render('teachers.ejs', { teachers });
// });

// router.get('/:id', (req, res) => {
// 	for (var i = 0; i < teachers.length; i++) {
// 		if (req.params.id == teachers[i].id) {
// 			res.send(teachers[i]);
// 		}
// 	}
// });



// router.get('/', (req, res) => {
// 	res.render('subjects.ejs', { subjects });
// });

// router.get('/:id', (req, res) => {
// 	for (var i = 0; i < subjects.length; i++) {
// 		if (req.params.id == subjects[i].id) {
// 			res.send(subjects[i]);
// 		}
// 	}
// });

module.exports = router;
