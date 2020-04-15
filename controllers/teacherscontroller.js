const fs = require('fs')

class TeachersController {
  static getTeachers(req, res){
    fs.readFile('./db/teachers.json', 'utf8', (err, data) => {
        if (err) {throw err}
        else {
          const teachers = JSON.parse(data)
          res.render('viewteachers', { teachers })
        }
      })
  }
}

module.exports = TeachersController