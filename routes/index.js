const {Router} = require('express')
const router = Router()

const fs = require ('fs')


router.get('/', function (req, res){
    res.render ('index')
})

const students = require('./students')
router.use('/students', students)

const subjects = require('./subjects')
router.use('/subjects', subjects)

const teachers = require('./teachers')
router.use('/teachers', teachers)



module.exports = router