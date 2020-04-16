// const fs = require('fs')
const pool = require('../config/connection')

class StudentsModel {
  // static open(callback) {
  //   fs.readFile('./db/students.json', 'utf8', (err, data) => {
  //       if (err) {throw err}
  //       else {callback(null, JSON.parse(data))}
  //   })
  // }

  // static save (data, callback) {
  //   fs.writeFile('./db/students.json', JSON.stringify(data, null, 2), 'utf8', (err) => {
  //     if (err) {throw err}
  //     else {callback(null)}
  //   })
  // }

  static showStudents(callback) {
    // this.open ((err, data) => {
    //   if (err) {callback(err, null)}
    //   else {callback(null, data)}
    // })
    const query = `SELECT * FROM students ORDER BY students.id asc`

    pool.query(query, (err, results) => {
      if (err) {callback(err, null)}
      else {callback(null, results.rows)}
    })
  }

  static add(req, callback) {
    // const first_name = req.body.first_name
    // const last_name = req.body.last_name
    // const email = req.body.email
    // const gender = req.body.gender
    // this.open((err, data) => {
    //   if (err) {throw err}
    //   else {
    //     const id = data[data.length-1].id + 1
    //     data.push({id, first_name, last_name, email, gender})
        
    //     this.save(data, (err) => {
    //       if (err) {throw err}
    //       else (callback(null))
    //     })
        
    //   }
    // })
    const query = `INSERT INTO students (first_name, last_name, email, gender) VALUES ($1, $2, $3, $4)`

    const params = [req.body.first_name, req.body.last_name, req.body.email, req.body.gender]

    pool.query(query, params, (err) => {
      if (err) {callback(err, null)}
      else {callback(null)}
    })
  }

  static getEdit (id, callback) {
    const ids = Number(id)
    // this.open((err, data) => {
    //   if (err) {throw err}
    //   else {
    //     for (let i = 0; i < data.length; i++){
    //       if (data[i].id === ids){
    //         const obj = data[i]
    //         console.log(obj)
    //         callback(obj)
    //       }
    //     }  
    //   }
    // })
    const query = `SELECT * FROM students WHERE students.id = $1`

    const params = [ids]

    pool.query(query, params, (err, results) => {
      if (err) {callback(err, null)}
      else {callback(null, results.rows[0])
    }

    })
  }

  static edit (req, callback) {
    const ids = Number(req.params.id)
    // const first_name = req.body.first_name
    // const last_name = req.body.last_name
    // const email = req.body.email
    // const gender = req.body.gender
    // this.open((err, data) => {
    //   if (err) {throw err}
    //   else {
    //     for (let i = 0; i < data.length; i++){
    //       if (data[i].id === ids){
    //         data[i].first_name = first_name
    //         data[i].last_name = last_name
    //         data[i].email = email
    //         data[i].gender = gender

    //         this.save(data, (err) => {
    //           if (err) {throw err}
    //           else {callback(null)}
    //         })
    //       }
    //     }
    //   }
    // })
    const query = `UPDATE students SET first_name = $2, last_name = $3, email = $4, gender = $5 WHERE id = $1`

    const params = [ids, req.body.first_name, req.body.last_name, req.body.email, req.body.gender]

    pool.query(query, params, (err) => {
      if (err) {callback(err, null)}
      else {callback(null)}
    })
  }

  static delete (req, callback) {
    const ids = Number(req.params.id)
    // this.open((err, data) => {
    //   if (err) {throw err}
    //   else {
    //     const newData = []
    //     for (let i = 0; i < data.length; i++){
    //       if (data[i].id !== ids){
    //         newData.push(data[i])
    //       }
    //     }
    //     this.save(newData, (err) => {
    //       if (err) {throw err}
    //       else {callback(null)}
    //     })
    //   }
    // })
    const query = `DELETE FROM students WHERE id = $1`

    const params = [ids]

    pool.query(query, params, (err) => {
      if (err) {callback(err, null)}
      else {callback(null)}
    })
  }
}

module.exports = StudentsModel