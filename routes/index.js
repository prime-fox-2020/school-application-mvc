const express = require('express');
const HomeController = require('../controllers/HomeController')
const routesTeacher = require('./teacher');
const router = express.Router();

router.get('/', HomeController.getHome);
router.use('/teacher', routesTeacher);
router.get('/*', HomeController.notFound);

module.exports = router;