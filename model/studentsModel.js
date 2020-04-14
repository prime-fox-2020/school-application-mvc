const pool = require('../config/connection')

class StudentsModel {

  static read(callback) {
    const query = `SELECT * FROM students ORDER BY id asc`
    pool.query(query, (err, res) => {
      if(err) {
        callback(err, null)
      } else {
        callback(null, res.rows)
      }
    })
  }

  static getStudents(callback) {
    this.read((err, data) => {
      if(err) {
        callback(err,null)
      } else {
        callback(null,data)
      }
    })
  }

  static postAdd(student, callback) {
    let query = `INSERT INTO students(first_name, last_name, email, gender, birth_date) VALUES ($1, $2, $3, $4, $5) `
    const params = [student.first_name, student.last_name, student.email, student.gender, student.birth_date]
    pool.query(query, params, err => {
      if(err) {
        callback(err, null)
      } else {
        callback(null, `Students ${student.first_name} successfully added`)
      }
    })
  }

  static getEdit(paramsId, callback) {
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

  static postEdit(student, callback) {
    let query = `UPDATE students SET first_name = $2, last_name = $3, email = $4, gender = $5, birth_date = $6 WHERE id = $1`
    let params = [student.id, student.first_name, student.last_name, student.email, student.gender, student.birth_date]

    pool.query(query, params, err => {
      if(err) {
        callback(err, null)
      } else {
        callback(null, `Successfully edited student ${student.first_name}`)
      }
    })
  }

  static getEmail(email, callback) {
    let query = `SELECT * FROM students WHERE email = $1`
    let params = [email]

    pool.query(query, params, (err, res) => {
      if(err) {
        callback(err,null)
      } else {
        callback(null, res.rows)
      }
    })
  }

  static delete(studentId, callback) {
    let query = `DELETE FROM students WHERE id = $1`
    let params = [studentId]

    pool.query(query, params, err => {
      if(err) {
        callback(err,null)
      } else {
        callback(null, `Students id ${studentId} has been deleted`)
      }
    })
  }
  
}

module.exports = StudentsModel