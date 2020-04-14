const { Router } = require('express')
const router = Router()
const homeController = require('../controllers/homeController')
const studentController = require('../controllers/studentsController')
const subjectController = require('../controllers/subjectController')
const teacherController = require('../controllers/teacherController')

router.get('/', homeController.getHome)
router.get('/students', studentController.getTableStudent)
router.get('/addStudent', studentController.addGet)
router.post('/addStudent', studentController.addPost)
router.get('/students/:id?/edit', studentController.editStudentGet)
router.post('/students/:id?/edit', studentController.editStudentPost)
router.get('/students/:id?/delete', studentController.deleteStudentPost)
router.get('/subjects', subjectController.getTableSubject)
router.get('/teachers', teacherController.getTableTeacher)


module.exports = router