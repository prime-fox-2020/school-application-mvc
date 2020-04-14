//require postgre
const pool = require("../config/connection");

class studentsModel {
  static getStudents(callback) {
    const query = `
      SELECT * from students ORDER BY id asc
    `;

    pool.query(query, (err, res) => {
      if (err) callback(err, null);
      else callback(null, res.rows);
    });
  }

  static delete(studentsId, callback) {
    const query = `
      DELETE FROM students WHERE id = $1
    `;
    const params = [studentsId];

    pool.query(query, params, err => {
      if (err) callback(err, null);
      else callback(null, `success`);
    });
  }

  static addPost(newStudents, callback) {
    const { first_name, last_name, email, gender, birth_date } = newStudents;
    const query = `
    INSERT INTO students (first_name, last_name, email, gender, birth_date) VALUES ($1, $2, $3, $4, $5)
    `;
    const params = [first_name, last_name, email, gender, birth_date];

    pool.query(query, params, err => {
      if (err) callback(err, null);
      else callback(null, `Student baru berhasil ditambahkan`);
    });
  }

  static editGet(id, callback) {
    const query = `SELECT * FROM students WHERE id = $1`;

    const params = [id];

    pool.query(query, params, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data.rows[0]);
      }
    });
  }

  static editPost(updatedStudents, callback) {
    // const { first_name, last_name, email, gender, birth_date } = data;
    const query = `
    UPDATE students SET first_name = $1, last_name = $2, email = $3, gender = $4, birth_date = $5 WHERE id = $6
  `;
    const params = [
      updatedStudents.first_name,
      updatedStudents.last_name,
      updatedStudents.email,
      updatedStudents.gender,
      updatedStudents.birth_date,
      updatedStudents.id
    ];

    pool.query(query, params, err => {
      if (err) callback(err, null);
      else callback(null, `Student baru berhasil diedit`);
    });
  }
}

module.exports = studentsModel;
