
const express = require('express')
const PageController = require('../controllers/PageController')
const router = express.Router()

router
  .get('/', PageController.getHome)

router
  .get('/*', PageController.notFound)

module.exports = router