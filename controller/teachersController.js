
const TeachersModel = require('../model/teachersModel')

class TeacherController{
 static showTeacher(req, res){
   TeachersModel.getTeachers((err,data)=>{
     if(err){
       res.render(err)
     }else{
      res.render('teachers', {data})
      // console.log(data)
     }
   })
 }

 static getTeacherId(req,res){
   TeachersModel.getTeacherId(Number(req.params.id), (err,data)=>{
     if(err){
       res.render(err)
     }else{
       
       res.render('teachers', {data})
     }
   })
 }
}
//  TeacherController.showTeacher()

module.exports = TeacherController