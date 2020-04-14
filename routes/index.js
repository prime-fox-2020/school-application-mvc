const express = require('express');
const routes = express.Router();


const homeController = require('../controller/homeController');

const teachers = require('../routes/teachers');
const subjects = require('../routes/subjects');
const students = require('../routes/students');

routes.get('/', homeController.getHome);

routes.use('/teachers', teachers); //use localhost:3000/teachers
routes.use('/students', students); // "" /students
routes.use('/subjects', subjects);// "" /subjects


module.exports = routes;
