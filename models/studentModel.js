const fs = require('fs')

class StudentModel{
    static readFileJson(callback){
        fs.readFile('./data/student.json','utf-8',(err,data) => {
            if (err){
                callback(err,null)
            } else {
                callback(null,JSON.parse(data))
            }
        })
    }

    static saveFileJson(data,callback){
        fs.writeFile('./data/student.json',JSON.stringify(data,null,2), (err)=>{
            if(err){
                callback(err)
            } else {
                callback(null)
            }
        })
    }

    static getStudentList(callback){
        this.readFileJson((err,data) => {
            if(err){
                callback(err,null)
            } else {
                callback(null, data)
            }
        })
    }

    static addStudentPost(newStudent, callback){
        this.readFileJson((err,data)=>{
            if(err){
                callback(err,null)
            } else {
                data.push({
                    id: data.length + 1,
                    first_name: newStudent.first_name,
                    last_name: newStudent.last_name,
                    email: newStudent.email
                })

                this.saveFileJson(data, (err)=>{
                    if(err){
                        callback(err,null)
                    } else {
                        console.log(data)
                        callback(null, `Student baru berhasil ditambah`)
                    }
                })
            }
        })
    }

    static editStudentGet(studentId, callback){
        this.readFileJson((err,data)=> {
            if (err){
                callback(err,null)
            } else {
                let studentData = {}
                data.forEach(item => {
                    if(item.id == studentId){
                        studentData = item
                    }
                })
                callback(null,studentData)
            }
        })
    }

    static editStudentPost(updatedStudent, callback){
        this.readFileJson((err,data)=> {
            if(err){
                callback(err,null)
            } else {
                data.forEach(item => {
                    if(item.id == updatedStudent.id){
                        item.first_name = updatedStudent.first_name,
                        item.last_name = updatedStudent.last_name,
                        item.email = updatedStudent.email
                    }
                })

                this.saveFileJson(data, (err)=>{
                    if(err){
                        callback(err,null)
                    } else {
                        callback(null,`Student with id ${updatedStudent.id} has been edited`)
                    }
                })
            }
        })
    }

    static deleteStudentGet(studentId, callback){
        this.readFileJson((err,data)=> {
            if(err){
                callback(err,null)
            } else {
                let updatedStudent = []
                data.forEach(item => {
                    if(item.id !== studentId){
                        updatedStudent.push(item)
                    }
                })
                this.saveFileJson(updatedStudent, (err)=> {
                    if(err){
                        callback(err)
                    } else {
                        callback(null, `Student with id ${studentId} berhasil dihapus`)
                    }
                })
            }
        })
    }

    static emailStudentGet(studentEmail, callback){
        this.readFileJson((err,data)=> {
            if(err){
                callback(err)
            } else {
                let email = studentEmail
                let result = []
                data.forEach(item =>{
                    if(item.email == email){
                        result.push(item)
                    }
                })
                callback(null, result)
            }
        })
    }
}

module.exports = StudentModel