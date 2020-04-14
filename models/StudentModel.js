const pool = require('../db/connection')

class StudentModel {
  
  static findAll(callback) {
    const query = 'SELECT * FROM students ORDER BY id'
    pool.query(query, (err, results) => {
      if (err) {
        callback(err, null)
      } else {
        console.log(results.rows)
        callback(null, results.rows)
      }
    })
  }

  static createOne({first_name, last_name, gender, email}, callback) {
    const query = 'INSERT INTO students (first_name, last_name, gender, email) VALUES ($1, $2, $3, $4)'
    const params = [first_name, last_name, gender, email]
    pool.query(query, params, err => {
      if (err) {
        callback(err, null)
      } else {
        callback(null, 'success')
      }
    })
    console.log(params)
  }
}

module.exports = StudentModel