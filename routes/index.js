const router = require('express').Router()

const ControllerHome = require('../controller/controller-home.js')
const studentsRouter = require('./students-router.js')
const teachersRouter = require('./teachers-router.js')
const subjectsRouter = require('./subjects-router.js')

router.get('/', ControllerHome.getHome)

router.use('/students', studentsRouter)
router.use('/teachers', teachersRouter)
router.use('/subjects', subjectsRouter)

module.exports = router