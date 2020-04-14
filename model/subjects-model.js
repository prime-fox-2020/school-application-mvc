const pool = require('../config/connection.js')
const fs = require('fs')

class SubjectsModel {
    static getListSubjects(callback) {
        // this.openFile((err, data) => {
        //     if (err) {
        //         callback(err, null)
        //     } else {
        //         callback(null, data)
        //     }
        // })
        const querySubjects = `SELECT * FROM subjects ORDER BY id asc`
        pool.query(querySubjects, (err, data) => {
            if (err) {
                callback(err, null)   
            } else {
                callback(null, data.rows)
            }
        })
    }

    static postAdd(dataQuery, callback) {
        this.openFile((err, data) => {
            if (err) {
                callback(err, null)
            } else {
                let newId = data[data.length - 1].id + 1
                data.push({
                    "id": newId,
                    "subject_name": dataQuery.subjectname,
                })
                this.saveFile(data, (err) => {
                    if (err) {
                        callback(err, null)
                    } else {
                        callback(null, data)
                    }
                })
            }
        })
    }

    static getEdit(callback) {
        this.openFile((err, data) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, data)
            }
        })
    }

    static postEdit(dataQueryBody, dataParamsId, callback) {
        this.openFile((err, data) => {
            if(err) {
                callback(err, null)
            } else {
                for (let i in data) {
                    if (data[i].id == dataParamsId) {
                        data[i].subject_name = dataQueryBody.subjectname || data[i].subject_name
                    }
                }
                this.saveFile(data, (err) => {
                    if (err) {
                        callback(err, null)
                    } else {
                        callback(null, data)
                    }
                })
            }
        })
    }

    static getDelete(dataParamsId, callback) {
        this.openFile((err, data) => {
            if (err) {
                callback(err, null)
            } else {
                let newData = []
                for (let i in data) {
                    if (data[i].id != dataParamsId) {
                        newData.push(data[i])
                    }
                }
                this.saveFile(newData, (err) => {
                    if (err) {
                        callback(err, null)
                    } else {
                        callback(null)
                    }
                })
            }
        })
    }
    
    static openFile(callback) {
        fs.readFile('./data/subjects.json', 'utf8', (err, data) => {
            if (err) {
                callback(err, null)
            } else {
                let dataParse = JSON.parse(data)
                callback(null, dataParse)
            }
        })
    }

    static saveFile(data, callback) {
        fs.writeFile('./data/subjects.json', JSON.stringify(data, null, 3), (err) => {
            if (err) {
                callback(err)
            } else {
                callback(null)
            }
        })
    }

}

module.exports = SubjectsModel