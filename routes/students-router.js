const router = require('express').Router()
const StudentsController = require('../controller/students-controller.js')

router.get('/', StudentsController.getListStudents)
router.get('/add', StudentsController.getAdd)
router.post('/add', StudentsController.postAdd)
router.get('/:id/edit', StudentsController.getEdit)
router.post('/:id/edit', StudentsController.postEdit)
router.get('/:id/delete', StudentsController.getDelete)
router.post('/:email', StudentsController.postStudentByEmail)

module.exports = router