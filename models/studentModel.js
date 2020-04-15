const pool = require('../config/connection')

class StudentModel {
    static getStudents(callback) {
        const query = `
        SELECT * FROM student ORDER BY id asc
        `
        pool.query(query, (err, results) => {
            if (err) callback(err, null)
            else callback(null, results.rows)
        })
    }

    static addPost(req, callback) {
        const query = `
        INSERT INTO student (first_name, last_name, email, gender, birth_date) VALUES ($1, $2, $3, $4, $5)        
        `
        const params = [req.first_name, req.last_name, req.email, req.gender, req.birth_date];
        pool.query(query, params, err => {
            if (err) callback(err, null)
            else callback(null, `Student berhasil ditambahkan`)
        })
    }



    static editGet(studentid, callback) {
        const query = `
        SELECT * FROM student WHERE id = $1
        `
        const params = [studentid]
        pool.query(query, params, (err, results) => {
            if (err) callback(err, null)
            else callback(null, results.rows[0])
        })
    }

    static editPost(req, callback) {
        const query = 'UPDATE student SET first_name = $1, last_name = $2, email = $3, gender = $4, birth_date = $5 WHERE id = $6';
        const params = [req.first_name, req.last_name, req.email, req.gender, req.birth_date, req.id];
        pool.query(query, params, (err) => {
            if (err) callback(err, null);
            else callback(null, `Student telah diedit`);
        });
    }

    static delete(studentID, callback) {
        const query = `
        DELETE FROM student WHERE id = $1
        `
        const params = [studentID]

        pool.query(query, params, err => {
            if (err) callback(err, null)
            else callback(null, `Student telah dihapus`)
        })
    }
}

module.exports = StudentModel