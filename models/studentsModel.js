const fs = require('fs')

class StudentsModel{
    static getStudents(callback) {
        this.read((err, data) => {
            if(err){
                callback(err)
            } else {
                callback(null, data)
            }
        })
    }

    static addStudentsPost(dataStudents, callback) {
        this.read((err, data) => {
            if(err){
                callback(err, null)
            } else {
                let newId = data[data.length-1].id+1

                data.push({
                    "id": newId,
                    "first_name" : dataStudents.first_name,
                    "last_name" : dataStudents.last_name,
                    "email" : dataStudents.email,
                    "gender" : dataStudents.gender,
                    "birth_date" : dataStudents.birth_date
                })

                this.save(data, (err) => {
                    if(err){
                        callback(err, null)
                    } else {
                        callback(null, data)
                    }
                })
            }
        })
    }

    static editStudentsGet(studentsId, callback) {
        this.read((err, data) => {
            if(err){
                callback(err)
            } else {
                //callback(null, data)
                let studentsEdit = {}
                data.forEach(element => {
                    if(studentsId === element.id) {
                        studentsEdit = element
                    }
                })

                callback(null, studentsEdit)
            }
        })
    }

    static editStudentsPost(newStudents, callback) {
        this.read((err, data) => {
            if(err){
                callback(err)
            } else {
                
                data.forEach(element => {
                    if(element.id === newStudents.id) {
                        element.first_name = newStudents.first_name,
                        element.last_name = newStudents.last_name,
                        element.email = newStudents.email,
                        element.gender = newStudents.gender
                        element.birth_date = newStudents.birth_date
                    }
                })

                this.save(data, (err) => {
                    if(err) {
                        callback(err)
                    } else {
                        callback(null, 'berhasil dubah')
                    }
                })
            }
        })
    }

    static deleteStudents(idParams, callback) {
        this.read((err, data) => {
            if(err){
                callback(err)
            } else {
                let updatedStudents = []

                data.forEach(element => {
                    if(idParams !== element.id){
                        updatedStudents.push(element)
                    }
                });

                this.save(updatedStudents, (err) => {
                    if(err){
                        callback(err)
                    } else {
                        callback(null, 'id berhasil dihapus')
                    }
                })
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
}

module.exports = StudentsModel