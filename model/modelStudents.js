const pool = require('../config/connection')


class ModelStudent {
    static getStudent(callback) {
        const queryGetStudents = `
            SELECT *
                FROM students
                ORDER BY id asc`

        pool.query(queryGetStudents, (err, res) => {
            if (err) callback(err, null)

            else callback(null, res.rows)
        })
    }

    static getEmail(email, callback) {
        const queryEmail = `
            SELECT *
                FROM students
                WHERE email = '${email}'`

        pool.query(queryEmail, (err, res) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, res.rows)
            }
        })
    }

    static addStudent(input, callback) {
        const queryStudents = `
            INSERT INTO students (first_name,last_name,email,gender,birth_date)
            VALUES ($1,$2,$3,$4,$5)`

        const params = [input.first_name, input.last_name, input.email, input.gender, input.birth_date]
        pool.query(queryStudents, params, (err, res) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, res.rows)
            }
        })
    }
    static postEdit(input, callback) {
        const queryEdit = `
            UPDATE students
            SET first_name = $2,last_name = $3, email =$4, gender = $5, birth_date = $6
            WHERE id = $1`

        const params = [input.id, input.first_name, input.last_name, input.email, input.gender, input.birth_date]
        // console.log(queryEdit, params)

        pool.query(queryEdit, params, (err, res) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, res.rows)
            }
        })
    }

    static postDelete(input,callback){
        const queryDelete = `DELETE FROM students WHERE id = $1`
        const params = [input]
        pool.query(queryDelete, params,(err,res)=>{
            if(err){
                callback(err,null)
            }else{
                callback(null,res.rows)
            }
        })
    }
}



module.exports = ModelStudent