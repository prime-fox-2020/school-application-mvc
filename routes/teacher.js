const express = require('express');
const TeacherController = require('../controllers/TeacherController')
const router = express.Router();

router.get('/', TeacherController.get);

module.exports = router;