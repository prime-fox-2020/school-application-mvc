const router = require('express').Router()
const teachers = require('./teachers')
const subjects = require('./subjects')
const students = require('./students')


router.use('/students', students)
router.use('/teachers', teachers)
router.use('/subjects', subjects)

module.exports = router;