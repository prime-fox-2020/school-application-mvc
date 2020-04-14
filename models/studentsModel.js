const pool = require('../config/connection')
const fs = require('fs')

class StudentsModel{
    static getStudents(callback) {
        // this.read((err, data) => {
        //     if(err){
        //         callback(err)
        //     } else {
        //         callback(null, data)
        //     }
        // })
        const querySelect = `SELECT * FROM students ORDER BY id asc `
        pool.query(querySelect, (err, data) => {
            if(err){
                callback(err, null)
            } else {
                callback(null, data.rows)
            }
        })
        
    }

    static addStudentsPost(dataStudents, callback) {
        // this.read((err, data) => {
        //     if(err){
        //         callback(err, null)
        //     } else {
        //         let newId = data[data.length-1].id+1

        //         data.push({
        //             "id": newId,
        //             "first_name" : dataStudents.first_name,
        //             "last_name" : dataStudents.last_name,
        //             "email" : dataStudents.email,
        //             "gender" : dataStudents.gender,
        //             "birth_date" : dataStudents.birth_date
        //         })

        //         this.save(data, (err) => {
        //             if(err){
        //                 callback(err, null)
        //             } else {
        //                 callback(null, data)
        //             }
        //         })
        //     }
        // })

        const queryAdd = `INSERT INTO students (first_name, last_name, email, gender, birth_date) 
                          VALUES ($1, $2, $3, $4, $5)`
        const values = [dataStudents.first_name, dataStudents.last_name, dataStudents.email, dataStudents.gender, dataStudents.birth_date]
        pool.query(queryAdd, values, (err) => {
            if(err) {
                callback(err)
            } else {
                callback(null, 'yeay berhasil')
            }
        })
    }

    static editStudentsGet(id, callback) {
        // this.read((err, data) => {
        //     if(err){
        //         callback(err)
        //     } else {
        //         //callback(null, data)
        //         let studentsEdit = {}
        //         data.forEach(element => {
        //             if(studentsId === element.id) {
        //                 studentsEdit = element
        //             }
        //         })

        //         callback(null, studentsEdit)
        //     }
        // })

        const queryUpdateGet = `SELECT * FROM students where id = $1`
        const values = [id]

        pool.query(queryUpdateGet, values, (err, data) => {
            if(err){
                callback(err)
            } else {
                callback(null, data.rows[0])
            }
        })
    }

    static editStudentsPost(newStudents, callback) {
        // this.read((err, data) => {
        //     if(err){
        //         callback(err)
        //     } else {
                
        //         data.forEach(element => {
        //             if(element.id === newStudents.id) {
        //                 element.first_name = newStudents.first_name,
        //                 element.last_name = newStudents.last_name,
        //                 element.email = newStudents.email,
        //                 element.gender = newStudents.gender
        //                 element.birth_date = newStudents.birth_date
        //             }
        //         })

        //         this.save(data, (err) => {
        //             if(err) {
        //                 callback(err)
        //             } else {
        //                 callback(null, 'berhasil dubah')
        //             }
        //         })
        //     }
        // })

        const queryUpdate = `UPDATE students SET
                                first_name = $1,
                                last_name = $2,
                                email = $3,
                                gender = $4,
                                birth_date = $5 WHERE id = $6`
        const values = [
            newStudents.first_name, 
            newStudents.last_name, 
            newStudents.email, 
            newStudents.gender, 
            newStudents.birth_date,
            newStudents.id]
 
        pool.query(queryUpdate, values, err => {
            if(err) {
                callback(err)
            } else {
                callback(null, 'berhasil diubah')
            }
        })
    }

    static deleteStudents(idParams, callback) {
        // this.read((err, data) => {
        //     if(err){
        //         callback(err)
        //     } else {
        //         let updatedStudents = []

        //         data.forEach(element => {
        //             if(idParams !== element.id){
        //                 updatedStudents.push(element)
        //             }
        //         });

        //         this.save(updatedStudents, (err) => {
        //             if(err){
        //                 callback(err)
        //             } else {
        //                 callback(null, 'id berhasil dihapus')
        //             }
        //         })
        //     }
        // })

        const queryDelete = `DELETE FROM students where id = ${idParams}`
        pool.query(queryDelete, (err) => {
            if(err){
                callback(err)
            } else {
                callback(null, 'id berhasil dihapus')
            }
        })
    }

    static read(callback) {
        fs.readFile('./data/students.json', 'utf8', (err, data) => {
            if(err){
                callback(err)
            } else {
                callback(null, JSON.parse(data))
            }
        })
    }

    static save(data, callback){
        fs.writeFile('./data/students.json', JSON.stringify(data, null, 3), (err) => {
            if(err){
                callback(err)
            } else {
                callback(null)
            }
        } )
    }

    static emailStudents(email, callback) {
        // this.getStudents((err, data) => {
        //     if(err) {
        //         callback(err)
        //     } else {
        //         let result = []

        //         for(let i=0; i<data.length; i++) {
        //             if(email === data[i].email) {
        //                 result.push(data[i])
        //             }
        //         }

        //         callback(null, result)
        //     }
        // })

        const queryEmail = `SELECT * FROM students where email = '${email}'`
        pool.query(queryEmail, (err, res) => {
            if(err) {
                callback(err)
            } else {
                callback(null, res.rows)
            }
        })
    }
}

module.exports = StudentsModel