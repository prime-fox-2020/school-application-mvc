
const SubjectsModel = require('../model/subjectsModel')

class SubjectsController{
 static showSubjects(req, res){
   SubjectsModel.getSubjects((err,data)=>{
     if(err){
       res.render(err)
     }else{
      res.render('subjects', {data})
      // console.log(data)
     }
   })
 }

 static getSubjectsId(req,res){
   SubjectsModel.getSubjectsId(Number(req.params.id), (err,data)=>{
     if(err){
       res.render(err)
     }else{
       console.log(data)
       res.render('subjects', {data})
     }
   })
 }
}
//  SubjectsController.showSubjects()

module.exports = SubjectsController