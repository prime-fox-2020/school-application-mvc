const express = require('express')
const teacherController = require('../controllers/teachersController')
const router = express.Router()

router.get('/', teacherController.getTeacherData)


module.exports = router