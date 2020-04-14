const fs = require('fs')

class StudentModel {
    static getStudents(callback) {
        this.open((err, data) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, data)
            }
        })
    }

    static addPost(addStudent, callback){
        this.open((err, data) => {
            if(err){
                callback(err, null)
            }else {
                data.forEach(element => {
                    if(element.id === addStudent.id){
                        element.first_name = updateStudent.first_name
                    }
                })
                this.save(data, (err) => {
                    if(err){
                        callback(err, null)
                    }else {
                        callback(null, `Student with id${updateStudent.id} edited`)
                    }
                })
            }
        })
    }

    //fungsi baca file
    static open(callback) {
        fs.readFile('./students.json', 'utf8', (err, data) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, JSON.parse(data))
            }
        })
    }

    //fungsi simpan
    static save(data, callback) {
        fs.writeFile('./students.json', JSON.stringify(data, null, 2), 'utf8', (err) => {
            if (err) {
                callback(err)
            } else {
                callback(null)
            }
        })
    }

    static editGet(studentid, callback) {
        this.open((err, data) => {
            if (err) {
                callback(err, null)
            } else {
                let student = {}

                data.forEach(element => {
                    if (studentid === element.id) {
                        student = element
                    }
                })
                callback(null, student)
            }
        })
    }

    static editPost(updateStudent, callback){
        this.open((err, data) => {
            if(err){
                callback(err, null)
            }else {
                data.forEach(element => {
                    if(element.id === updateStudent.id){
                        element.first_name = updateStudent.first_name
                    }
                })
                this.save(data, (err) => {
                    if(err){
                        callback(err, null)
                    }else {
                        callback(null, `Student with id${updateStudent.id} edited`)
                    }
                })
            }
        })
    }

    static delete(studentID, callback) {
        this.open((err, data) => {
            if (err) {
                callback(err, null)
            } else {
                const updateStudent = []

                data.forEach(element => {
                    if (studentID != element.id) {
                        updateStudent.push(element)
                    }
                })
                this.save(updateStudent, (err) => {
                    if (err) {
                        callback(err, null)
                    } else {
                        callback(null, `Student with id ${studentID} deleted`)
                    }
                })
            }
        })
    }
}

module.exports = StudentModel