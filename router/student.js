
const express = require('express')
const StudentController = require('../controllers/StudentController')
const router = express.Router()

router
  .get('/', StudentController.getStudents)

router
  .get('/add', StudentController.getAdd)

module.exports = router