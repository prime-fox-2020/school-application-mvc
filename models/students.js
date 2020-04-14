'use strict'

const dateConvert   = require('../helper/dateConvert')
const pool          = require('../config/connection')

class StudentsModel{
  static getStudents(callback){
    const query = `
      SELECT * FROM students ORDER BY id
    `
    pool.query(query, (err, data) => {
      if(err) callback(err, null)
      else callback(null, data.rows)
    })
  }

  static addPost(student, callback){
    const first_name  = student.first_name
    const last_name   = student.last_name
    const email       = student.email
    const gender      = student.gender
    const birthday    = student.birthday
    const query = `
      INSERT INTO students (first_name, last_name, email, gender, birth_date) VALUES ($1, $2, $3, $4, $5)
    `
    const params = [first_name, last_name, email, gender, birthday]
    pool.query(query, params, (err) => {
      if(err){
        callback(err, null)
      } 
      else callback(null, 'data student berhasil ditambahkan')
    })
  }

  static editGet(id, callback){
    const query = `
      SELECT * FROM students
      WHERE id = $1
    `
    const params = [id]
    pool.query(query, params, (err,data) => {
      if(err) callback(err, null)
      else {
        data.rows[0].birth_date = data.rows[0].birth_date.toISOString().slice(0,10)
        callback(null, data.rows[0])
      }
    })
  }

  static editPost(id, student, callback){
    const query = `
      UPDATE students 
      SET 
      first_name = $2, 
      last_name = $3, 
      email = $4, 
      gender = $5,
      birth_date = $6
      WHERE id = $1
    `
    const first_name  = student.first_name
    const last_name   = student.last_name
    const email       = student.email
    const gender      = student.gender
    const birthday    = student.birthday
    const params      = [id, first_name, last_name, email, gender, birthday]

    console.log(id)
    pool.query(query, params, err => {
      if(err) callback(err, null)
      else callback(null, 'successfully update student')
    })
  }

  static delete(id,callback){
    const query = `
      DELETE FROM students
      WHERE id = $1
    `
    const params = [id]
    pool.query(query, params, err => {
      if(err) callback(err, null)
      else callback(null, 'data successfully deleted')
    })
  }

  static getByEmail(email, callback){
    const query = `
      SELECT * FROM students
      WHERE email = $1
    `
    const params = [email]
    pool.query(query, params, (err,data) => {
      if(err) callback(err, null)
      else callback(null, data.rows[0])
    })
  }
}

module.exports = StudentsModel