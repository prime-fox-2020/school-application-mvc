const router = require('express').Router();
const HomeController = require('../controllers/homeController');
const teacherRoute = require('./teacher');
const subjectRoute = require('./subject');
const studentRoute = require('./student');

router.get('/', HomeController.getHome);
router.use('/teacher', teacherRoute);
router.use('/subject', subjectRoute);
router.use('/student', studentRoute);
router.get('/*', HomeController.notFound);

module.exports = router;