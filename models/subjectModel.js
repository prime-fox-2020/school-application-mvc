const pool = require('../config/connection');

class SubjectModel {
    static showData(req, callback) {
        let query = 'SELECT * FROM subjects ORDER BY ID ASC';
        let params = [];
        if (req.params.id) {
            query = 'SELECT * FROM subjects WHERE ID = $1';
            params = [+req.params.id];
        }
        
        pool.query(query, params, (err, res) => {
            if (err) callback(err, null);
            callback(null, res.rows);
        })
    }

    static addPost(data, callback) {
        let query = 'INSERT INTO subjects (subject_name) VALUES ($1)';
        const params = [data.subject_name]

        pool.query(query, params, (err, res) => {
            if (err) callback(err, null);
            callback(null, 'Data berhasil ditambahkan');
        });
    }

    static editGet(id, callback) {
        let query = 'SELECT * FROM subjects WHERE id = $1';
        const params = [id];

        pool.query(query, params, (err, res) => {
            if (err) callback(err, null);
            callback(null, res.rows[0]);
        });
    }

    static editPost(id, data, callback) {
        let query = 'UPDATE subjects SET subject_name = $2 WHERE id = $1';
        const params = [id, data.subject_name];

        pool.query(query, params, (err, res) => {
            if (err) callback(err, null);
            callback(null, 'Data berhasil diedit');
        });
    }

    static delete(id, callback) {
        let query = 'DELETE FROM subjects WHERE id = $1';
        const params = [id];

        pool.query(query, params, (err, res) => {
            if (err) callback(err, null);
            callback(null, `Data dengan id ${id} dihapus`);
        });
    }
}

module.exports = SubjectModel;