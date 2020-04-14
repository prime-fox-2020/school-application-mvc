const express = require('express')
const subject = require('../controllers/subjectControllers')
const route = express.Router()


route.get('/', subject.SubjectData)

module.exports = route