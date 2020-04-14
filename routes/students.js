const router = require('express').Router()
const ControllerStudents = require('../controllers/students')


router.get('/', ControllerStudents.getAll)

router.get('/add', ControllerStudents.showForm)
router.post('/add', ControllerStudents.addProcess)

router.get('/:id/delete/', ControllerStudents.deleteProcess)

router.get('/:id/edit/', ControllerStudents.showEditForm)
router.post('/:id/edit/', ControllerStudents.editProcess)

router.get('/:email', ControllerStudents.getByEmail)


module.exports = router