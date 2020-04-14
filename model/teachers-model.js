const fs = require('fs')

class TeachersModel {
    static getListTeachers(callback) {
        this.openFile((err, data) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, data)
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
                    "first_name": dataQuery.firstname,
                    "last_name": dataQuery.lastname,
                    "email": dataQuery.email,
                    "gender": dataQuery.gender,
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
                        data[i].first_name = dataQueryBody.firstname || data[i].first_name
                        data[i].last_name = dataQueryBody.lastname || data[i].last_name
                        data[i].email = dataQueryBody.email || data[i].email
                        data[i].gender = dataQueryBody.gender || data[i].gender
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
        fs.readFile('./data/teachers.json', 'utf8', (err, data) => {
            if (err) {
                callback(err, null)
            } else {
                let dataParse = JSON.parse(data)
                callback(null, dataParse)
            }
        })
    }

    static saveFile(data, callback) {
        fs.writeFile('./data/teachers.json', JSON.stringify(data, null, 3), (err) => {
            if (err) {
                callback(err)
            } else {
                callback(null)
            }
        })
    }

}

module.exports = TeachersModel