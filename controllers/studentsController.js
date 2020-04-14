
const studentsModel = require('../models/studentsModel')

class StudentsController {
    static getStudentsData(req, res) {
        /// baca data dari model kemudian di render ke views
        studentsModel.getData((err, data) => {
            if(err) {
                res.render('error', {error: err})
            } else {
                // console.log(data)
                res.render('students', {data})
            }
        })

    }
}


module.exports = StudentsController