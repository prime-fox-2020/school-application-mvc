const pool = require('../config/connection');

class TeacherModel {
    static showData(req, callback) {
        let query = 'SELECT * FROM teachers ORDER BY ID ASC';
        let params = [];
        if (req.params.id) {
            query = 'SELECT * FROM teachers WHERE ID = $1';
            params = [+req.params.id];
        }

        pool.query(query, params, (err, res) => {
            if (err) callback(err, null);
            callback(null, res.rows);
        })
    }

    static addPost(data, callback) {
        let query = 'INSERT INTO teachers (first_name, last_name, email, gender) VALUES ($1, $2, $3, $4)';
        const params = [data.first_name, data.last_name, data.email, data.gender]

        pool.query(query, params, (err, res) => {
            if (err) callback(err, null);
            callback(null, 'Data berhasil ditambahkan');
        });
    }

    static editGet(id, callback) {
        let query = 'SELECT * FROM teachers WHERE id = $1';
        const params = [id];

        pool.query(query, params, (err, res) => {
            if (err) callback(err, null);
            callback(null, res.rows[0]);
        });
    }

    static editPost(id, data, callback) {
        let query = 'UPDATE teachers SET first_name = $2, last_name = $3, email = $4, gender = $5 WHERE id = $1';
        const params = [id, data.first_name, data.last_name, data.email, data.gender];

        pool.query(query, params, (err, res) => {
            if (err) callback(err, null);
            callback(null, 'Data berhasil diedit');
        });
    }

    static delete(id, callback) {
        let query = 'DELETE FROM teachers WHERE id = $1';
        const params = [id];

        pool.query(query, params, (err, res) => {
            if (err) callback(err, null);
            callback(null, `Data dengan id ${id} dihapus`);
        });
    }
}

module.exports = TeacherModel;