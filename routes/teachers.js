const express = require('express')
const TeachersController = require('../controllers/TeachersController')

const router = express.Router()

//ini routing untuk localhost:3000/Subjects/
router.get('/', TeachersController.teachersList)




module.exports = router