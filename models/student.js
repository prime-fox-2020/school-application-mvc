const pool = require('../config/conection');

class Student {
    static read (cb) {
        pool.query('SELECT * FROM students ORDER BY id asc', (err, res) => {
            if (err) {
                cb(err, null)
            } else {
                cb(null, res.rows)
            }
        })
    }

    static add (el,cb) {
        pool.query(`INSERT INTO students (first_name, last_name, email, gender, birth_date)
        VALUES ('${el.first_name}', '${el.last_name}', '${el.email}', '${el.gender}', '${el.birth_date}')`, (err, res) => {
            if (err) {
                cb(err, null, null)
            } else {
                this.read((err, data) => {
                    if (err) {
                        cb(err, null, null)
                    } else {
                        cb(err, data, `${el.first_name} success add`)
                    }
                })
            }
        })
    }

    static delete(id, cb) {
        console.log(`DELETE FROM students WHERE id = ${Number(id)}`);
        pool.query(`DELETE FROM students WHERE id = ${Number(id)}`, (err, res) => {
            if (err) {
                cb(err, null, null)
            } else {
                this.read((err, data) => {
                    if (err) {
                        cb(err, null, null)
                    } else {
                        console.log(data);
                        cb(err, data, `Student with Id : ${id} success deleted`)
                    }
                })
            }
        })
    }

    static edit(id,cb) {
        pool.query(`SELECT * FROM students WHERE id = ${Number(id)}`, (err, res) => {
            if (err) {
                cb(err, null)
            } else {
                cb(null, res.rows[0])
            }
        })
    }

    static update(req, cb) {
        pool.query(`UPDATE students
        SET first_name = '${req.body.first_name}',
            last_name = '${req.body.last_name}',
            email = '${req.body.email}',
            gender = '${req.body.gender}',
            birth_date = '${req.body.birth_date}'
        WHERE id = ${Number(req.params.id)}`, (err,data) => {
            if (err) {
                cb(err, null)
            } else {
                this.read((err, data) => {
                    if (err) {
                        cb(err, null, null)
                    } else {
                        console.log(data);
                        cb(err, data, `Student with Id : ${req.params.id} success updated!`)
                    }
                })
            }
        })
    }

    static emailPost(email, cb) {
        pool.query(`SELECT * FROM students WHERE email = '${email}'`, (err, res) => {
            console.log('email: ', email);
            if (err) {
                cb(err, null)
            } else {
                console.log(res.rows);
                cb(null, res.rows[0], null)
            }
        })
    }
}

module.exports = Student;
