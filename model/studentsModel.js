const pool = require('../config/connection');

class StudentsModel {
  //baca file teacher.json -> lempar data ke controller
  static getStudent(callback) {

    const query = `
      SELECT * FROM students
    `
    pool.query(query, (err, results) => {
      if(err) callback(err, null);
      else callback(null, results.rows);
    });
  }

  static getStudentEmail(studentEmail, callback) {
    const query = `
      SELECT * FROM students
      WHERE email = '${studentEmail}'
    `
    pool.query(query, (err, results) => {
      if(err) callback(err, null);
      else callback(null, results.rows);
    });
  }

  static addStudent (newStudent, callback) {
    console.log(newStudent);
    const query = `
      INSERT INTO students (first_name, last_name, email, gender, birthdate)
      VALUE('${newStudent.first_name}','${newStudent.last_name}','${newStudent.email}','${newStudent.gender}','${newStudent.birthdate}' )
    `
    pool.query(query, (err, results) => {
      if(err) callback(err, null);
      else callback(null, results.rows);
    });
  }

  // static getStudentEdit (callback) {
  //
  //   const query = `
  //     INSERT INTO students ()
  //   `
  //
  //   pool.query(query, (err, results) => {
  //     if(err) callback(err, null);
  //     else callback(null, results.rows);
  //   })
  //
  // }

  // static postStudentEdit (callback) {
  //
  //   const query = `
  //     INSERT INTO students ()
  //   `
  //
  //   pool.query(query, (err, results) => {
  //     if(err) callback(err, null);
  //     else callback(null, results.rows);
  //   })
  //
  // }
  static deleteStudent(studentId, callback) {
    const query = `
      DELETE FROM students
      WHERE id = '${studentId}'
    `
    pool.query(query, (err, results) => {
      if(err) callback(err, null);
      else callback(null, results.rows);
    });
  }
}
module.exports = StudentsModel;
