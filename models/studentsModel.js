const pool = require('../config/connection');

class StudentsModel {
  static getData(callback) {
    const query = `
      SELECT * FROM students
    `

    pool.query(query, (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res.rows);
      }
    })
  }

  static addDataGet(callback) {
    const query = `
      SELECT * FROM students
    `

    pool.query(query, (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res.rows);
      }
    })
  }

  static addDataPost(req, callback) {
    const query = `
      INSERT INTO students (first_name, last_name, email, birth_date)
      VALUES ($1, $2, $3, $4)
    `
    const params = [req.body.first_name, req.body.last_name, req.body.email, req.body.birth_date];

    pool.query(query, params, err => {
      if (err) {
        callback(err);
      } else {
        callback();
      }
    })
  }

  static editDataGet(callback) {
    const query = `
      SELECT * FROM students
    `

    pool.query(query, (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res.rows);
      }
    })
  }

  static editDataPost(req, callback) {
    const query = `
      UPDATE students
      SET first_name = $1,
          last_name = $2,
          email = $3,
          birth_date = $4
      WHERE id = $5
    `

    const params = [req.body.first_name, req.body.last_name, req.body.email, req.body.birth_date, Number(req.params.id)];

    pool.query(query, params, err => {
      if (err) {
        callback(err);
      } else {
        callback();
      }
    })
  }

  static deleteData(req, callback) {
    const query = `
      DELETE FROM students
      WHERE id = $1
    `

    const params = [Number(req.params.id)];

    pool.query(query, params, err => {
      if (err) {
        callback(err);
      } else {
        callback();
      }
    })
  }
}

module.exports = StudentsModel;