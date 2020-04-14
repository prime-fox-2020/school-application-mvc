const studentsModel = require("../models/studentsModel");

class StudentsController {
  static studentsList(req, res) {
    //baca data dari model => render view students
    studentsModel.getStudents((err, data) => {
      if (err) {
        res.render("error", { error: err });
      } else {
        res.render("students", { data });
      }
    });
  }

  static addGet(req, res){
    res.render('addStudents')
  }
  static addPost(req,res){
    studentsModel.addPost(req.body, (err,data)=>{
      if(err) {
        res.render('error', {error : err})
      } else {
        res.redirect('/students')
      }
    })
  }

  static delete(req,res){
    studentsModel.delete(Number(req.params.id), (err,data)=>{
      if (err) {
        res.send('error', {error:err})
      } else {
        res.redirect('/students')
      }
    })
  }

  static editGet(req,res) {
    studentsModel.editGet(Number(req.params.id), (err,data)=>{
      if (err){
        res.send('error', {error:err})
      } else {
        res.render('editStudents',{data})
      }
    })
  }

  static editPost(req,res) {
    const updatedStudent = {
      id : req.params.id,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      gender: req.body.gender,
      birth_date: req.body.birth_date
    }

    studentsModel.editPost(updatedStudent, (err,data)=>{
      if (err){
        res.send('error', {error : err})
      } else {
        res.redirect('/students')
      }
    })
  }
}


module.exports = StudentsController;
