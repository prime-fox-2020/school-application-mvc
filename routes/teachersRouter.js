const router = require('express').Router()

const TeachersController = require('../controllers/teachersController')

router.get('/', TeachersController.getteachers)

module.exports = router