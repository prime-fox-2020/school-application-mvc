
const express = require('express')
const StudentController = require('../controllers/StudentController')
const router = express.Router()

router
  .get('/', StudentController.findAll)

router
  .get('/add', StudentController.createOne)

module.exports = router