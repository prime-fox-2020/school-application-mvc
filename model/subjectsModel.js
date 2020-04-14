const pool = require('../config/connection')

class SubjectsModel{

  static read(callback) {
    const query = `SELECT * FROM subjects`

    pool.query(query, (err, res) => {
      if(err) {
        callback(err, null)
      } else {
        callback(null, res.rows)
      }
    })
  }

  static getSubjects(callback) {
    this.read((err, data) => {
      if(err) {
        callback(err, null)
      } else {
        callback(null, data)
      }
    })
  }

  static getId(params, callback) {
    let query = `SELECT * FROM subjects WHERE id = $1`
    let paramsId = [params]

    pool.query(query, paramsId, (err, res) => {
      if(err) {
        callback(err, null)
      } else {
        callback(null, res.rows)
      }
    })
  }
  
}

module.exports = SubjectsModel