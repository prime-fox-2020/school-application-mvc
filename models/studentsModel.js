const pool = require('../config/connection')

class StudentsModel {

  static getStudents(callback){
    this.open((err, data)=>{
      if(err){
        callback(err, null)
      } else {
        callback(null, data)
      }
    })
  }

  static open(callback){
    const query = `SELECT * FROM students ORDER BY id asc`
    pool.query(query, (err, res)=>{
      if(err){
        callback(err, null)
      } else {
        callback(null, res.rows)
      }
    })
  }

  static addPost(data, callback){
    const query = `INSERT INTO students (first_name, last_name, email, gender, birth_date) VALUES ($1,$2, $3, $4, $5)`
    const params = [data.first_name, data.last_name, data.email, data.gender, data.birth_date]

    pool.query(query, params, err =>{
      if (err){
        callback(err, null)
      } else {
        callback(null, `Students has been added!`)
      }
    })
  }

  static editGet(paramsId, callback) {
    let query =  `SELECT * FROM students WHERE id = $1`
    let params = [paramsId]
    pool.query(query, params, (err, res) => {
      if(err) {
        callback(err, null)
      } else {
        callback(null, res.rows[0])
      }
    })
  }

  static editPost(student, callback) {
    let query = `UPDATE students SET first_name = $2, last_name = $3, email = $4, gender = $5, birth_date = $6 WHERE id = $1`
    let params = [student.id, student.first_name, student.last_name, student.email, student.gender, student.birth_date]
    pool.query(query, params, err => {
      if(err) {
        callback(err, null)
      } else {
        callback(null, `Students with id: ${student.id} has been successfuly edited!`)
      }
    })
  }

  static delete(studentsId, callback){
    const query = `DELETE FROM students WHERE id = $1`
    const params = [studentsId]

    pool.query(query, params, err=>{
      if (err){
        callback(err, null)
      } else {
        callback(null, `Students with id: ${studentsId} has been deleted!`)
      }
    })
  }

  static getEmail(email, callback){
    let query = `SELECT * FROM students WHERE email = $1`
    let params = [email]

    pool.query(query, params, (err,res)=>{
      if(err){
        callback(err, null)
      } else {
        callback(null, res.rows)
      }
    })
  }
}

module.exports = StudentsModel