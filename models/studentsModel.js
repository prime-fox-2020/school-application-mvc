const fs = require(`fs`)


class StudentModel{

    constructor(){

    }

    static getStudents(callback){
        // baca file .json lempar ke controller
        this.open((err,data)=>{
            if(err) callback(err,null)
            else callback(null,data)
        })
    }

    static open(callback){
        fs.readFile(`./student.json`,`utf8`,(err,data)=>{
            if(err) callback(err,null)
            else 
            callback(null,JSON.parse(data))

        })
    }

    static addPost(students,callback){
        this.open((err,data)=>{

            if(err){
                callback(err,null)
            }else{
                let newId = data[data.length-1].id +1

                data.push({
                    id: newId,
                    first_name: students.first_name,
                    last_name : students.last_name,
                    email: students.email,
                    gender: students.gender,
                    birt_date :students.birt_date
                })
                
                this.save(data,(err)=>{
                    if(err){
                        callback(err,null)
                    }else{
                        callback(null,`Student Baru Berhasil di tambahkan!`)    
                    }
                })
            }
        })
    }

    static save(data,callback){

        fs.writeFile(`./student.json`,JSON.stringify(data,null,2),`utf8`,(err)=>{
            if(err) callback(err)
            else callback(null)
        })

    }

    static delete(studentId,callback){
        this.open((err,data)=>{
            if(err){
                callback(err,null)
            }else{
                let newStudents=[]
                data.forEach(element => {
                    if(studentId != element.id){
                        newStudents.push(element)
                    }
                })

                this.save(newStudents,(err)=>{
                    if(err){
                        callback(err,null)
                    }else{
                        callback(null,`Student dengan Id :${studentId} Berhasil di detele`)
                    }
                })
            }
        })
    }

    static editGet(studentId,callback){
        this.open((err,data)=>{
            if(err){
                callback(err,null)
            }else{
                let student ={}
                data.forEach(element => {
                    if(studentId == element.id){
                        student = element
                    }
                })

                callback(null,student)
            }
        })

    }

    static editPost(editStudent,callback){
        this.open((err,data)=>{
            if(err){
                callback(err,null)
            }else{

                for (let i = 0; i < data.length; i++) {
                    if(data[i].id == editStudent.id ){
                        data[i]={
                            id:data[i].id,
                            first_name: editStudent.first_name,
                            last_name: editStudent.last_name,
                            email: editStudent.email,
                            gender: editStudent.gender,
                            birt_date: editStudent.birt_date
                        }
                    }
                }
 
                this.save(data ,(err)=>{
                    if(err){
                        callback(err,null)
                    }else{
                        callback(null,` Data Students dengan Id : ${editStudent.id} berhasil di Edit`)
                    }
                })
            }
        })
    }

}


module.exports = StudentModel