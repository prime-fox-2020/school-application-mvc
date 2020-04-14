const router = require('express').Router()
const TeachersController = require('../controller/teachers-controller.js')

router.get('/', TeachersController.getListTeachers)
router.get('/add', TeachersController.getAdd)
router.post('/add', TeachersController.postAdd)
router.get('/:id/edit', TeachersController.getEdit)
router.post('/:id/edit', TeachersController.postEdit)
router.get('/:id/delete', TeachersController.getDelete)

module.exports = router