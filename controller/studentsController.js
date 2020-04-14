const express = require('express')
const pool = require('../config/connection.js')
const ModelStudents = require('../model/modelStudents.js')

class StudentController {
    static getAll(req, res) {
        ModelStudents.getStudent((err, data) => {
            if (err) {
                res.render('error')
            } else {
                res.render('students', { data }) // data di oper ke view. 
            }
        })
    }
    static getEmail(req, res) {
        ModelStudents.getEmail(req.params.email, (err, data) => {
            if (err) {
                res.render('error')
            } else {
                res.render('students', { data })
            }
        })
    }
    // menampilkan page untuk mengisi data
    static addStudent(req, res) {
        res.render('add_students')
    }

    static postAdd(req, res) {
        ModelStudents.addStudent(req.body, (err, data) => {
            if (err) {
                res.render('error')
            } else {
                res.render('students', { data })
            }
        })
    }

    static edit(req, res) {
        res.render('edit_students')
    }
    static postEdit(req, res) {
        ModelStudents.postEdit(req.body, (err, data) => {
            if (err) {
                res.render('error')
            } else {
                res.render('students', { data })
            }
        })
    }
    static postDelete(req,res){
        ModelStudents.postDelete(Number(req.params.id),(err,data)=>{
            if(err){
                res.render('error')
            }else{
                res.render('students',{data})
            }
        })

    }
}



module.exports = StudentController