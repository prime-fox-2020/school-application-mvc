const fs = require('fs')

class SubjectsController {
  static getSubjects (req, res) {
    fs.readFile('./db/subjects.json', 'utf8', (err, data) => {
        if (err) {throw err}
        else {
          const subjects = JSON.parse(data)
          res.render('viewsubjects', { subjects })
        }
      })
  }
}

module.exports = SubjectsController