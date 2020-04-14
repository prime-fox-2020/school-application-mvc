const fs = require('fs')
const routes = require('express').Router()
const SubjectsController = require('../controller/subjectsController')

routes.get('/', SubjectsController.getSubjects)
routes.get('/:id', SubjectsController.getId)

// routes.get('/:id', (req, res) => {
//   fs.readFile('./data/subjects.json','utf8',(err, data) => {
//     if(err) {
//       res.send(err)
//     } else {
//       data = JSON.parse(data)
//       let subject =[]
//       for(let i = 0; i < data.length; i++) {
//         if(data[i].id == req.params.id) {
//           subjects.push(data[i])
//         }
//       }
//       if(students.length > 0) {
//         res.render('subjects', {subjects:subject})
//       }
//     }
//   })
// });


module.exports = routes