const routes = require('express').Router()

const HomeController = require('../controller/homeController')
// const StudentsController = require('../controller/studentsContrSoller')
// const TeachersController = require('../controller/teachersController')
// const SubjectsController = require('../controller/subjectsController')

const routeStudents = require('./students')
const routeTeachers = require('./teachers')
const routeSubjects = require('./subjects')



routes.get('/', HomeController.getHome)
routes.use('/students', routeStudents)
routes.use('/teachers', routeTeachers)
routes.use('/subjects', routeSubjects)



// routes.use('/students', StudentsController.getStudents)
// routes.use('/teachers', TeachersController.getTeachers)
// routes.use('/subjects', SubjectsController.getSubjects)



routes.get('/*', HomeController.getError)
module.exports = routes