const pool = require('../config/connection');

class SubjectsModel {
  static getData(callback) {
    const query = `
      SELECT * FROM subjects
    `

    pool.query(query, (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res.rows);
      }
    })
  }
}

module.exports = SubjectsModel;