const express = require('express')
const StudentController = require('../controllers/studentsController')


const router = express.Router()

router.get('/', StudentController.showDataStudents)
router.get('/add', StudentController.addGet)
router.post('/add', StudentController.addPost)

module.exports = router