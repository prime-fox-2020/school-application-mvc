const fs = require('fs')

class subjectController{

    static getTableSubject(req, res){
        const subjects_list = JSON.parse(fs.readFileSync('./subjects.json', 'utf8'))
        // res.send(student_list)
        res.render('./subjects', {subjects_list})
    }
}

module.exports = subjectController