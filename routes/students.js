// const fs = require('fs');
const express = require('express');
const routes = express.Router();
const STC = require('../controller/studentsController');

routes.get('/', STC.studentList);
routes.get('/:email', STC.studentEmail);
routes.get('/add', STC.studentAddGet);
routes.post('/add', STC.studentAddPost);
routes.get('/:id/edit', STC.studentAddGet);
routes.post('/:id/edit', STC.studentAddPost);
routes.get('/:id/delete', STC.deleteStudentById);

module.exports = routes;
