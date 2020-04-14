const express = require('express')
const router = express.Router()
const homeControl = require('../controllers/HomeController')
const teachControl = require('../controllers/TeacherController')
const studentControl = require('../controllers/StudentController')
const subjectControl = require('../controllers/SubjectController')

router.get('/', homeControl.getHome)

router.get('/teachers',teachControl.getTeacher)

router.get('/teachers/:id', teachControl.getTeacherId)
router.get('/students', studentControl.getStudent)

router.get('/students/add', studentControl.addStudent)

router.get('/students/:email', studentControl.getStudentEmail)

router.get('/students/:id/edit', studentControl.editStudent)

router.get('/students/:id/delete', studentControl.deleteStudent)

router.get('/subjects', subjectControl.getSubject)

router.get('/subjects/:id', subjectControl.getSubjectId)

router.post('/students/add', studentControl.addStudentPost)

router.post('/students/edit', studentControl.editStudentPost)

module.exports = router