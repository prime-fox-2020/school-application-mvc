const express = require('express')
const HomeController = require('../controllers/homeController')
const router = express.Router()
const students = require('./studentsRoute')
const teacher = require('./teachersRoute')
const subject = require('./subjectsRouter')


router.get('/', HomeController.getHome)
router.use('/students', students)
router.use('/teachers', teacher)
router.use('/subjects', subject)
router.get('/*', HomeController.errorPage)


module.exports = router
