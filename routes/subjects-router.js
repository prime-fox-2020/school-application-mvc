const router = require('express').Router()
const SubjectsController = require('../controller/subjects-controller.js')

router.get('/', SubjectsController.getListSubjects)
router.get('/add', SubjectsController.getAdd)
router.post('/add', SubjectsController.postAdd)
router.get('/:id/edit', SubjectsController.getEdit)
router.post('/:id/edit', SubjectsController.postEdit)
router.get('/:id/delete', SubjectsController.getDelete)

module.exports = router