const router = require('express').Router()


const HomeController = require('../controllers/home.js')
router.get('/', HomeController.showHome)


const students = require('./students')
router.use('/students', students)

const subjects = require('./subjects')
router.use('/subjects', subjects)

const teachers = require('./teachers')
router.use('/teachers', teachers)


module.exports = router