const route = require('express').Router();
const fs = require('fs');
const ChangeMonth = require('../helpers/date');
const Controller = require('../controllers/studentController');

route.get('/', Controller.read);
route.get('/add', Controller.add_get);
route.post('/add', Controller.add_post);
route.get('/:id/edit', Controller.edit_get);
route.post('/:id/edit', Controller.edit_post);


// route.post('/:id/edit', (req, res) => {
//     fs.readFile('./data/students.json', 'utf-8', (err, data) => {
//         if(err){
//             res.send(err);
//         } else {
//             data = JSON.parse(data);
//             let id = Number(req.params.id);
//             let result = [];
//             let first_name = req.body.first_name;
//             let last_name = req.body.last_name;
//             let email = req.body.email;
//             let gender = req.body.gender;
//             let dateArr = req.body.birth_date.split('-');

//             dateArr[1] = ChangeMonth.changeToWord(dateArr[1]);
//             dateArr[2] = dateArr[2].substring(1);
//             let birth_date = dateArr.reverse().join(' ');

//             data.forEach(el => {
//                 if(el.id == id){
//                     result.push({
//                         id, first_name, last_name, email, gender, birth_date
//                     });
//                 } else {
//                     result.push(el);
//                 }
//             });

//             fs.writeFile('./data/students.json', JSON.stringify(result, null, 2), (err) => {
//                 if(err){
//                     res.send(err);
//                 } else {
//                     res.redirect('/students');
//                 }
//             })
//         }
//     })
// })

route.get('/:email', Controller.getEmail);
route.get('/:id/delete', Controller.delete);


module.exports = route;