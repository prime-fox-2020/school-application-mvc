const pg = require('../config/connection')

class ModelStudents{
    static getStudents(callback){
        pg.query(`SELECT * FROM students ORDER BY id ASC`, (err, res) => {
            if(err){
                callback(err, null)
            }
            else{
                callback(null, res.rows)
            }
        })
    }

    static readWithId(id, callback){
        pg.query(`SELECT * FROM students WHERE id = ${id}`, (err, res) => {
            if(err){
                this.call(err, null)
            }
            else{
                callback(null, res.rows)
            }
        })
    }

    static delete(id, callback){
        const query = `DELETE FROM students WHERE id = ${id}`
        pg.query(query, (err) => {
            if(err) callback(err)
            else callback(null, `Student with id ${id} has been deleted !`)
        })
    }

    static update(data, callback){
        const query = `UPDATE students SET first_name = $1, last_name = $2, email = $3, birth_date = $4 WHERE id = $5`
        const params = [ data.first_name, data.last_name, data.email, data.birth_date, data.id ] 
        pg.query(query, params, (err) => {
            if(err) callback(err)
            else callback(null, `Student with id ${data.id} has been edited !`)
        })
    }

    static write(data, callback){
        const query = `INSERT INTO students (first_name, last_name, email, gender, birth_date)
        VALUES ($1, $2, $3, $4, $5)`

        const params = [ data.first_name, data.last_name, data.email, data.gender, data.birth_date ] 

        pg.query(query, params, (err) => {
            if(err) callback(err)
            else{
                callback(null, `New student has been added !`)
            }
        })
    }

    static getPageEmail(email, callback){
        pg.query(`SELECT * FROM students WHERE email = '${email}'`, (err, res) => {
            if(err){
                callback(err, null)
            }
            else{
                callback(null, res.rows)
            }
        })
    }
}

module.exports = ModelStudents
