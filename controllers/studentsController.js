
const studentsModel = require('../models/studentsModel')

class StudentController{
    static studentListGet(req, res){
        studentsModel.getStudentList((err,data) => {
            if (err){
                res.render('error',{error:err})
            } else {
                res.render('students',{data})
            }
        })
    }
    static addStudentGet(req,res){
        res.render('addStudents')
    }
    static addStudentPost(req,res){
        // res.send(req.body)
        studentsModel.addStudentPost(req.body, (err,data)=>{
            if(err){
                res.render('error',{error:err})
            } else {
                res.redirect('/student')
                // res.render('students',{data})
            }
        })
    }

    static editStudentGet(req,res){
        studentsModel.editStudentGet(Number(req.params.id), (err,data)=> {
            if(err){
                res.render('error',{error:err})
            } else {
                res.render('editStudents',{data})
            }
        })
    }
    static editStudentPost(req,res){
        const updatedStudent = {
            id : Number(req.params.id),
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            email : req.body.email
        }
        studentsModel.editStudentPost(updatedStudent, (err,data) => {
            if(err){
                res.render('error',{error:err})
            } else {
                res.redirect('/student')
            }
        })
    }

    static deleteStudentGet(req,res){
        studentsModel.deleteStudentGet(Number(req.params.id), (err,data) => {
            if(err){
                res.render('error',{error:err})
            } else {
                res.redirect('/student')
            }
        })
    }

    static emailStudentGet(req,res){
        studentsModel.emailStudentGet(req.params.email, (err,data) => {
            if(err){
                res.render('error',{error:err})
            } else {
                res.render('students', {data})
            }
        })
    }
}

module.exports = StudentController