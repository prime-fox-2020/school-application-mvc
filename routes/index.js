const router = require('express').Router();

const TeachersController = require('../controllers/teachersController');
const StudentsController = require('../controllers/studentsController');
const SubjectsController = require('../controllers/subjectsController');

router.get('/', (req, res) => {
  res.render('home.ejs');
})

//teachers
router.get('/teachers', TeachersController.getData);
router.get('/teachers/:id', TeachersController.getDataById);

//students
router.get('/students', StudentsController.getData);
router.get('/students/add', StudentsController.addDataGet);
router.post('/students/add', StudentsController.addDataPost);
router.get('/students/:id/edit', StudentsController.editDataGet);
router.post('/students/:id/edit', StudentsController.editDataPost);
router.get('/students/:id/delete', StudentsController.deleteData);
router.get('/students/:email', StudentsController.getDataByEmail);

//subjects
router.get('/subjects', SubjectsController.getData);
router.get('/subjects/:id', SubjectsController.getDataById);

module.exports = router;