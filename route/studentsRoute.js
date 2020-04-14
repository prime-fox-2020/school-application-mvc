const express = require('express')
const students = require('../controllers/studentsController')
const router = express.Router()



router.get('/', students.getStudentsData)


module.exports = router