const pool = require('../db/connection')

class StudentModel {
  
  static findAll(callback) {
    const query = 'SELECT * FROM students'
    pool.query(query, (err, results) => {
      if (err) {
        callback(err, null)
      } else {
        console.log(results.rows)
        callback(null, results.rows)
      }
    })
  }
}

module.exports = StudentModel