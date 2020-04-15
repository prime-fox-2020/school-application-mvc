const routes = require('express').Router()
const StudentsController = require('../controllers/studentscontroller')

routes.get('/', (req, res) => {
  StudentsController.getStudents(req, res)
})



module.exports = routes