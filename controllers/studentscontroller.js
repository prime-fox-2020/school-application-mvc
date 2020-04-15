const fs = require('fs')

class StudentsController {
  static getStudents (req, res) {
    fs.readFile('./db/students.json', 'utf8', (err, data) => {
        if (err) {throw err}
        else {
          const students = JSON.parse(data)
          res.render('viewstudents', { students })
        }
      })
  }

  
}

module.exports = StudentsController