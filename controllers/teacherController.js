const fs = require('fs')

class teacherController{

    static getTableTeacher(req, res){
        const teachers_list = JSON.parse(fs.readFileSync('./teachers.json', 'utf8'))
        // res.send(student_list)
        res.render('./teachers', {teachers_list})
    }
}

module.exports = teacherController