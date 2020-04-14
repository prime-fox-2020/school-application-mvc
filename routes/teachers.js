const router = require('express').Router()
// const teachers = require('../teachers.json');
const TeachersController = require('../controller/teachersController')


router.get('/', TeachersController.showTeacher)
router.get('/:id', TeachersController.getTeacherId)

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


module.exports = router