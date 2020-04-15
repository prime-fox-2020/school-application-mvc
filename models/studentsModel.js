const fs = require('fs')
const pool = require('../config/connection')

class StudentsModel {
    // static getData(callback) {
    //     this.open((err, data) => {
    //         if(err) {
    //             callback(err, null)
    //         } else {
    //             callback(null, data)
    //         }
    //     })
    // }

    // static open(callback) {
    //     fs.readFile('./students.json', 'utf8', (err, data) => {
    //         if(err) {
    //             callback(err, null)
    //         } else {
    //             callback(null, JSON.parse(data))
    //         }
    //     })
    // }

    static getStudentList(callback){
        // this.readFileJson((err,data) => {
        //     if(err){
        //         callback(err,null)
        //     } else {
        //         callback(null, data)
        //     }
        // })
        const query = `SELECT * FROM student ORDER BY id asc`
        pool.query(query, (err,result)=> {
            if(err) {
                callback(err,null)
            } else{
                callback(null, result.rows)
            }
        })
    }

    static addStudentPost(newStudent, callback){
        // this.readFileJson((err,data)=>{
        //     if(err){
        //         callback(err,null)
        //     } else {
        //         data.push({
        //             id: data.length + 1,
        //             first_name: newStudent.first_name,
        //             last_name: newStudent.last_name,
        //             email: newStudent.email
        //         })

        //         this.saveFileJson(data, (err)=>{
        //             if(err){
        //                 callback(err,null)
        //             } else {
        //                 console.log(data)
        //                 callback(null, `Student baru berhasil ditambah`)
        //             }
        //         })
        //     }
        // })
        const query = `INSERT INTO student (first_name, last_name, email, gender, birth_date) VALUES ($1,$2,$3,$4,$5)`
        const param = [newStudent.first_name, newStudent.last_name, newStudent.email, newStudent.gender, newStudent.birth_date]
        pool.query(query,param, (err,result)=> {
            if(err){
                callback(err,null)
            } else {
                callback(null, `Student baru berhasil ditambah`)
            }
        })
    }

    static editStudentGet(studentId, callback){
        // this.readFileJson((err,data)=> {
        //     if (err){
        //         callback(err,null)
        //     } else {
        //         let studentData = {}
        //         data.forEach(item => {
        //             if(item.id == studentId){
        //                 studentData = item
        //             }
        //         })
        //         callback(null,studentData)
        //     }
        // })
        const query = `SELECT * FROM student WHERE id = $1`
        const param = [studentId]
        pool.query(query,param,(err,result)=>{
            if(err){
                callback(err,null)
            } else {
                callback(null,result.rows)
            }
        })
    }

    static editStudentPost(updatedStudent, callback){
        // this.readFileJson((err,data)=> {
        //     if(err){
        //         callback(err,null)
        //     } else {
        //         data.forEach(item => {
        //             if(item.id == updatedStudent.id){
        //                 item.first_name = updatedStudent.first_name,
        //                 item.last_name = updatedStudent.last_name,
        //                 item.email = updatedStudent.email
        //             }
        //         })

        //         this.saveFileJson(data, (err)=>{
        //             if(err){
        //                 callback(err,null)
        //             } else {
        //                 callback(null,`Student with id ${updatedStudent.id} has been edited`)
        //             }
        //         })
        //     }
        // })
        const query = `
        UPDATE student
        SET first_name = $2, last_name = $3, email = $4, gender = $5, birth_date = $6
        WHERE id = $1`
        const param = [updatedStudent.id, updatedStudent.first_name, updatedStudent.last_name, updatedStudent.email, updatedStudent.gender, updatedStudent.birth_date]
        pool.query(query, param, (err,result)=> {
            if(err){
                callback(err,null)
            } else {
                callback(null, `Student with id ${updatedStudent.id} has been edited`)
            }
        })
    }

    static deleteStudentGet(studentId, callback){
        // this.readFileJson((err,data)=> {
        //     if(err){
        //         callback(err,null)
        //     } else {
        //         let updatedStudent = []
        //         data.forEach(item => {
        //             if(item.id !== studentId){
        //                 updatedStudent.push(item)
        //             }
        //         })
        //         this.saveFileJson(updatedStudent, (err)=> {
        //             if(err){
        //                 callback(err)
        //             } else {
        //                 callback(null, `Student with id ${studentId} berhasil dihapus`)
        //             }
        //         })
        //     }
        // })
        const query = `DELETE FROM student WHERE id = $1`
        const param = [studentId]
        pool.query(query,param,(err,result)=>{
            if(err){
                callback(err,null)
            } else {
                callback(null, `Student with id ${studentId} berhasil dihapus`)
            }
        })
    }

    static emailStudentGet(studentEmail, callback){
        // this.readFileJson((err,data)=> {
        //     if(err){
        //         callback(err)
        //     } else {
        //         let email = studentEmail
        //         let result = []
        //         data.forEach(item =>{
        //             if(item.email == email){
        //                 result.push(item)
        //             }
        //         })
        //         callback(null, result)
        //     }
        // })
        const query = `SELECT * FROM student WHERE email = $1`
        const param = [studentEmail]
        pool.query(query,param, (err,result)=> {
            if(err){
                callback(err,null)
            } else {
                callback(null,result.rows)
            }
        })
    }
}


module.exports = StudentsModel