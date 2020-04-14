const StudentModel = require('../models/studentModel')

class StudentController{
    static studentListGet(req, res){
        StudentModel.getStudentList((err,data) => {
            if (err){
                res.render('errorpage',{error:err})
            } else {
                res.render('studentpage',{data})
            }
        })
    }
    static addStudentGet(req,res){
        res.render('addstudent')
    }
    static addStudentPost(req,res){
        // res.send(req.body)
        StudentModel.addStudentPost(req.body, (err,data)=>{
            if(err){
                res.render('errorpage',{error:err})
            } else {
                res.redirect('/student')
                // res.render('studentpage',{data})
            }
        })
    }

    static editStudentGet(req,res){
        StudentModel.editStudentGet(Number(req.params.id), (err,data)=> {
            if(err){
                res.render('errorpage',{error:err})
            } else {
                res.render('editstudent',{data})
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
        StudentModel.editStudentPost(updatedStudent, (err,data) => {
            if(err){
                res.render('errorpage',{error:err})
            } else {
                res.redirect('/student')
            }
        })
    }

    static deleteStudentGet(req,res){
        StudentModel.deleteStudentGet(Number(req.params.id), (err,data) => {
            if(err){
                res.render('errorpage',{error:err})
            } else {
                res.redirect('/student')
            }
        })
    }

    static emailStudentGet(req,res){
        StudentModel.emailStudentGet(req.params.email, (err,data) => {
            if(err){
                res.render('errorpage',{error:err})
            } else {
                res.render('studentpage', {data})
            }
        })
    }
}

module.exports = StudentController