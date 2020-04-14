const router = require('express').Router()
const ControllerSubjects = require('../controllers/subjects')


router.get('/', ControllerSubjects.getAll)

router.get('/:id', ControllerSubjects.getByID)


module.exports = router