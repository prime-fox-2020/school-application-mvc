const express = require('express')
const StudentController = require('../controllers/studentsController')


const router = express.Router()

router.get('/', StudentController.showDataStudents)
router.get('/add', StudentController.addGet)
router.post('/add', StudentController.addPost)
router.get('/:id/edit', StudentController.editGet)
router.post('/:id/edit', StudentController.editPost)
router.get('/:id/delete', StudentController.delete)

module.exports = router