
const express = require('express')
const SubjectController = require('../controllers/SubjectController')
const router = express.Router()

router
  .get('/', SubjectController.getSubjects)

router
  .get('/:id', SubjectController.getSubjectById)

module.exports = router