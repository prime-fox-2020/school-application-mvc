const express = require('express')
const HomeController = require('../controllers/homeController')
const routeStudent = require('./students')

const router = express.Router()

router.get('/', HomeController.getHome)
router.use('/students', routeStudent)

router.get('/*', HomeController.notFound)

module.exports = router