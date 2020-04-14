const fs = require('fs')

class TeachersModel {
    constructor(id, firstName, lastName, email, gender, birthDate){
        this.id = id
        this.first_name = firstName
        this.last_name = lastName
        this.email = email
        this.gender = gender
        this.birth_date = birthDate
    }
    
    static getTeachers(callback){
        fs.readFile('./data/teachers.json', 'utf-8', (err, data) => {
            if (err) {
                callback(err, null)
            } else {
                let raw = JSON.parse(data)
                let temp = []
                raw.forEach(el => {
                    temp.push(new TeachersModel(el.id, el.first_name, el.last_name, el.email, el.gender, el.birth_date))
                });
                callback(null, temp)
            }
        })
    }

    static getId(id, callback){
        fs.readFile('./data/teachers.json', 'utf8', (err, data) => {
            if(err){
                callback(err, null)
            } else {
                data = JSON.parse(data)
                let result = []
    
                for(let i = 0; i < data.length; i++){
                    if(Number(id) === data[i].id){
                        result.push(data[i])
                    }
                }
                callback(null, result)
            }
        })
    }
}

module.exports = TeachersModel