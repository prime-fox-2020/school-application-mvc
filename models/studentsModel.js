const fs = require('fs')

class StudentModel {
    constructor(id, firstName, lastName, email, gender, birthDate) {
        this.id = id
        this.first_name = firstName
        this.last_name = lastName
        this.email = email
        this.gender = gender
        this.birth_date = birthDate
    }

    static getStudents(callback) {
        fs.readFile("./data/students.json", "utf-8", (err, data) => {
            if (err) {
                callback(err, null)
            } else {
                let raw = JSON.parse(data)
                let temp = []
                raw.forEach(el => {
                    temp.push(new StudentModel(el.id, el.first_name, el.last_name, el.email, el.gender, el.birth_date))
                });
                callback(null, temp)
            }
        })
    }

    static write(data, callback) {
        fs.writeFile('./data/students.json', JSON.stringify(data, null, 4), (err) => {
            if (err) {
                callback(err)
            } else {
                callback(null)
            }
        })
    }

    static save(params, callback) {
        this.getStudents((err, data) => {
            if (err) {
                callback(err, null)
            } else {
                let newId = data[data.length - 1].id + 1
                let newStudents = new StudentModel(
                    newId,
                    params.firstName,
                    params.lastName,
                    params.email,
                    params.gender,
                    params.birthDate)
                data.push(newStudents)
                this.write(data, (err) => {
                    if (err) {
                        callback(err, null)
                    } else {
                        callback(null, true)
                    }
                })
            }
        })
    }

    static add(callback) {
        this.getStudents((err, data) => {
            if (err) {
                callback(err, null)
            } else {
                data.push(new this.getStudents(
                    data[data.length - 1].id + 1,
                    req.body.firstName,
                    req.body.lastName,
                    req.body.email,
                    req.body.gender,
                    req.body.birthDate))
                callback(null, temp)
                fs.writeFile('./data/students.json', JSON.stringify(data, null, 4), (err) => {
                    if (err) {
                        res.send(err)
                    } else {
                        res.redirect("/students")
                    }
                })
            }
        })
    }

    static delete(id, callback) {
        this.getStudents((err, data) => {
            if (err) {
                callback(err, null)
            } else {
                let newData = []
                for (let i = 0; i < data.length; i++) {
                    if (data[i].id != id) {
                        console.log('delete data succsess');
                        newData.push(data[i])
                    };
                }
                this.write(newData, (err) => {
                    if (err) {
                        callback(err)
                    } else {
                        callback(null)
                    }
                })

            }
        })
    }

    static getEdit(id, callback){
        this.getStudents((err, data) => {
            if (err) {
                callback(err)
            } else {
                let result = []
                for (let i = 0; i < data.length; i++) {
                    if (data[i].id == id) {
                        result.push(data[i])
                    }
                }
                callback(null, result)
            }
        })
    }

    static update(id, params, callback) {
        
        this.getStudents((err, data) => {
            if (err) {
                callback(err)
            } else {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].id == Number(id)) {
                        if(params.firstName) data[i].first_name = params.firstName
                        if (params.lastName) data[i].last_name = params.lastName
                        if (params.email) data[i].email = params.email
                        if (params.gender) data[i].gender = params.gender
                        if (params.birthDate) data[i].birth_date = params.birthDate
                    };
                }
                console.log('id: ', id);
                console.log('params: ', params);
                this.write(data, (err) => {
                    if (err) {
                        callback(err)
                    } else {
                        callback(null)
                    }
                })
            }
        })
    }

    static getEmail(email, callback){
        this.getStudents((err, data) => {
            if (err) {
                callback(err)
            } else {
                let result = []
                for (let i = 0; i < data.length; i++) {
                    if (email == data[i].email) {
                        result.push(data[i])
                    }
                }
                callback(null, result)
            }
        })
    }
}

module.exports = StudentModel