const fs = require('fs')
const pool = require('../config/connection.js')

class StudentsModel {
    static getListStudents(callback) {
        // this.openFile((err, data) => {
        //     if (err) {
        //         callback(err, null)
        //     } else {
        //         callback(null, data)
        //     }
        // })
        const queryStudents = `SELECT * FROM students ORDER BY id asc`
        pool.query(queryStudents, (err, data) => {
            if (err) {
                callback(err, null)   
            } else {
                callback(null, data.rows)
            }
        })
    }

    static postAdd(dataQuery, callback) {
        // this.openFile((err, data) => {
        //     if (err) {
        //         callback(err, null)
        //     } else {
        //         // let dataParse = JSON.parse(data)
        //         let newId = data[data.length - 1].id + 1
        //         data.push({
        //             "id": newId,
        //             "first_name": dataQuery.firstname,
        //             "last_name": dataQuery.lastname,
        //             "email": dataQuery.email,
        //             "gender": dataQuery.gender,
        //             "birth_date": dataQuery.birthdate
        //         })
        //         this.saveFile(data, (err) => {
        //             if (err) {
        //                 callback(err, null)
        //             } else {
        //                 callback(null, data)
        //             }
        //         })
        //     }
        // })
        const queryStudents = `
        INSERT INTO students (first_name, last_name, email, gender, birth_date) 
        VALUES ($1, $2, $3, $4, $5)`
        const params = [dataQuery.firstname, dataQuery.lastname, dataQuery.email, dataQuery.gender, dataQuery.birthdate]
        pool.query(queryStudents, params, (err, data) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, data)
            }
        })
    }

    static getEdit(dataParamsId, callback) {        
        // this.openFile((err, data) => {
        //     if (err) {
        //         callback(err, null)
        //     } else {
        //         let newData = []
        //         for (let i in data) {
        //             if (dataParamsId == data[i].id) {
        //                 newData.push(data[i])
        //             }
        //         }
        //         console.log(newData);
                
        //         callback(null, newData)
        //     }
        // })
        const queryStudents = `
        SELECT * FROM students WHERE id = $1`
        const params = [dataParamsId]
        pool.query(queryStudents, params, (err, data) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, data.rows[0])
            }
        })
    }

    static postEdit(dataQueryBody, dataParamsId, callback) {
        // this.openFile((err, data) => {
        //     if(err) {
        //         callback(err, null)
        //     } else {
        //         for (let i in data) {
        //             if (data[i].id == dataParamsId) {
        //                 data[i].first_name = dataQueryBody.firstname || data[i].first_name
        //                 data[i].last_name = dataQueryBody.lastname || data[i].last_name
        //                 data[i].email = dataQueryBody.email || data[i].email
        //                 data[i].gender = dataQueryBody.gender || data[i].gender
        //                 data[i].birth_date = dataQueryBody.birthdate || data[i].birth_date
        //             }
        //         }
        //         this.saveFile(data, (err) => {
        //             if (err) {
        //                 callback(err, null)
        //             } else {
        //                 callback(null, data)
        //             }
        //         })
        //     }
        // })
        const queryStudents = `
        UPDATE students 
        SET first_name = '${dataQueryBody.firstname}',
            last_name = '${dataQueryBody.lastname}',
            email = '${dataQueryBody.email}',
            gender = '${dataQueryBody.gender}',
            birth_date = '${dataQueryBody.birthdate}'
        WHERE id = ${Number(dataParamsId)}`
        pool.query(queryStudents, (err, data) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, data)
            }
        })

    }

    static getDelete(dataParamsId, callback) {
        // this.openFile((err, data) => {
        //     if (err) {
        //         callback(err, null)
        //     } else {
        //         let newData = []
        //         for (let i in data) {
        //             if (data[i].id != dataParamsId) {
        //                 newData.push(data[i])
        //             }
        //         }
        //         this.saveFile(newData, (err) => {
        //             if (err) {
        //                 callback(err, null)
        //             } else {
        //                 callback(null)
        //             }
        //         })
        //     }
        // })
        const queryStudents = `
        DELETE FROM students WHERE id = $1
        `
        const params = [dataParamsId]
        pool.query(queryStudents, params, (err, data) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, data)
            }
        })
    }

    // static openFile(callback) {
    //     fs.readFile('./data/students.json', 'utf8', (err, data) => {
    //         if (err) {
    //             callback(err, null)
    //         } else {
    //             let dataParse = JSON.parse(data)
    //             callback(null, dataParse)
    //         }
    //     })
    // }

    // static saveFile(data, callback) {
    //     fs.writeFile('./data/students.json', JSON.stringify(data, null, 3), (err) => {
    //         if (err) {
    //             callback(err)
    //         } else {
    //             callback(null)
    //         }
    //     })
    // }

}

module.exports = StudentsModel