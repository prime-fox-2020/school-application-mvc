const pool = require('../config/connection');

class StudentModel {
    static showData(req, callback) {
        let query = 'SELECT * FROM students ORDER BY ID ASC';
        let params = [];
        if (req.params.email) {
            query = 'SELECT * FROM students WHERE email = $1';
            params = [req.params.email];
        }
        
        pool.query(query, params, (err, res) => {
            if (err) callback(err, null);
            callback(null, res.rows);
        })
    }

    static addPost(data, callback) {
        let query = 'INSERT INTO students (first_name, last_name, email, gender, birth_date) VALUES ($1, $2, $3, $4, $5)';
        const params = [data.first_name, data.last_name, data.email, data.gender, data.birth_date];

        pool.query(query, params, (err, res) => {
            if (err) callback(err, null);
            callback(null, 'Data berhasil ditambahkan');
        });
    }

    static editGet(id, callback) {
        let query = 'SELECT * FROM students WHERE id = $1';
        const params = [id];

        pool.query(query, params, (err, res) => {
            if (err) callback(err, null);
            callback(null, res.rows[0]);
        });
    }

    static editPost(id, data, callback) {
        let query = 'UPDATE students SET first_name = $2, last_name = $3, email = $4, gender = $5, birth_date = $6 WHERE id = $1';
        const params = [id, data.first_name, data.last_name, data.email, data.gender, data.birth_date];

        pool.query(query, params, (err, res) => {
            if (err) callback(err, null);
            callback(null, 'Data berhasil diedit');
        });
    }

    static delete(id, callback) {
        let query = 'DELETE FROM students WHERE id = $1';
        const params = [id];

        pool.query(query, params, (err, res) => {
            if (err) callback(err, null);
            callback(null, `Data dengan id ${id} dihapus`);
        });
    }
}

module.exports = StudentModel;