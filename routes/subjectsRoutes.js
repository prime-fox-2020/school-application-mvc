const router = require('express').Router()

const subjectsController = require('../controllers/subjectsController')

router.get('/', subjectsController.getSubjects)

module.exports = router