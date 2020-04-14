
const express = require('express')
const StudentController = require('../controllers/StudentController')
const router = express.Router()

router
  .get('/', StudentController.getStudents)

router
  .get('/add', StudentController.getAdd)
  .post('/add', StudentController.postAdd)

router
  .get('/:id/edit', StudentController.getEdit)
  .post('/:id/edit', StudentController.postEdit)

router
  .get('/:id/delete', StudentController.deleteById)

module.exports = router