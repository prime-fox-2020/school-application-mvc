const express = require('express')
const students = require('../controllers/studentsController')
const router = express.Router()



router.get('/', students.studentListGet)
router.get('/add', students.addStudentGet)
router.post('/add', students.addStudentPost)
router.get('/:email', students.emailStudentGet)
router.get('/:id/edit', students.editStudentGet)
router.post('/:id/edit', students.editStudentPost)
router.get('/:id/delete', students.deleteStudentGet)


module.exports = router