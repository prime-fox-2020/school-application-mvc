let Model = require('../models/model')
class TeacherController {
    static getTeacher(req,res){
        Model.readTeacher((err,data)=>{
            if(err) console.log(err)

            res.render('../views/teachers.ejs', {data: data, id: undefined})
        })
    }

    static getTeacherId(req,res){
        Model.readTeacher((err,data)=>{
            if(err) console.log(err)

            res.render('../views/teachers.ejs', {data: data, id: req.params.id})
        })
    }
}

module.exports = TeacherController