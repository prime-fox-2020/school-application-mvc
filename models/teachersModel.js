const pool = require('../config/connection');

class TeachersModel {
  static getData(callback) {
    const query = `
      SELECT * FROM teachers
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

module.exports = TeachersModel;